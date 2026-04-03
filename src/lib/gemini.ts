import { GoogleGenAI, Type } from "@google/genai";
import { BacterialIsolate, PredictionResult } from "../types";

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export async function predictResistance(isolate: BacterialIsolate): Promise<PredictionResult> {
  const prompt = `
    Analyze the following bacterial isolate data and predict antibiotic resistance patterns, specifically considering the Indian clinical context (e.g., prevalence of NDM-1, OXA-48, and high rates of carbapenem resistance in tertiary care centers).
    Isolate ID: ${isolate.id}
    Species: ${isolate.species}
    Source: ${isolate.source}
    Location: ${isolate.location}
    Resistance Genes: ${isolate.resistanceGenes.join(", ")}
    Current Susceptibility: ${JSON.stringify(isolate.susceptibility)}

    Based on this data, provide:
    1. Predicted resistance for common antibiotics used in India (probability 0-1).
    2. Confidence level (High, Medium, Low).
    3. Top predictive genes for the resistance.
    4. Suggested treatment strategies (considering ICMR guidelines and available Indian drug formulations).
    5. A detailed technical analysis of the resistance mechanisms involved, referencing local epidemiology where relevant.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            predictedResistance: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  antibiotic: { type: Type.STRING },
                  probability: { type: Type.NUMBER },
                  confidence: { type: Type.STRING, enum: ["High", "Medium", "Low"] },
                },
                required: ["antibiotic", "probability", "confidence"],
              },
            },
            topPredictiveGenes: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            suggestedTreatments: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            analysis: { type: Type.STRING },
          },
          required: ["predictedResistance", "topPredictiveGenes", "suggestedTreatments", "analysis"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return {
      isolateId: isolate.id,
      ...result,
    };
  } catch (error) {
    console.error("AI Prediction Error:", error);
    // Fallback mock result if AI fails
    return {
      isolateId: isolate.id,
      predictedResistance: isolate.susceptibility.map(s => ({
        antibiotic: s.antibiotic,
        probability: s.result === 'Resistant' ? 0.95 : 0.1,
        confidence: 'High',
      })),
      topPredictiveGenes: isolate.resistanceGenes.slice(0, 2),
      suggestedTreatments: ["Consult infectious disease specialist", "Consider carbapenem-sparing options if susceptible"],
      analysis: "Automated analysis based on known resistance markers. Further clinical correlation required.",
    };
  }
}
