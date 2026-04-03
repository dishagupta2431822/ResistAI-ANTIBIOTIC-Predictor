export interface PatientDemographics {
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  comorbidities: string[];
}

export interface BacterialIsolate {
  id: string;
  species: string;
  source: 'Clinical' | 'Environmental';
  location: string;
  resistanceGenes: string[];
  susceptibility: {
    antibiotic: string;
    result: 'Resistant' | 'Susceptible' | 'Intermediate';
    mic?: number;
  }[];
  patient?: PatientDemographics;
  metadata: {
    collectionDate: string;
    sequencingMethod?: string;
  };
}

export interface RuleBasedPrediction {
  antibiotic: string;
  result: 'Resistant' | 'Susceptible' | 'Intermediate';
  confidence: number;
  reason: string;
}

export interface PredictionResult {
  isolateId: string;
  predictedResistance: {
    antibiotic: string;
    probability: number;
    confidence: 'High' | 'Medium' | 'Low';
  }[];
  topPredictiveGenes: string[];
  suggestedTreatments: string[];
  analysis: string;
}

export interface GeneNode {
  id: string;
  group: number;
  description: string;
}

export interface GeneLink {
  source: string;
  target: string;
  value: number;
}
