import { BacterialIsolate, RuleBasedPrediction } from "../types";

/**
 * A rule-based engine that predicts resistance based on known gene-antibiotic associations.
 * This is a deterministic engine that complements the AI-based predictions.
 */
export function runRuleBasedEngine(isolate: BacterialIsolate): RuleBasedPrediction[] {
  const predictions: RuleBasedPrediction[] = [];
  const genes = new Set(isolate.resistanceGenes.map(g => g.toLowerCase()));

  // Beta-lactam rules
  if (genes.has('blandm-1') || genes.has('blakpc-2')) {
    predictions.push({
      antibiotic: 'Meropenem',
      result: 'Resistant',
      confidence: 0.98,
      reason: 'Presence of carbapenemase gene (NDM-1/KPC-2) strongly indicates carbapenem resistance.'
    });
  }

  if (genes.has('blactx-m-15') || genes.has('blashv-12')) {
    predictions.push({
      antibiotic: 'Ceftazidime',
      result: 'Resistant',
      confidence: 0.95,
      reason: 'ESBL gene (CTX-M-15/SHV-12) detected, conferring resistance to 3rd gen cephalosporins.'
    });
  }

  // Aminoglycoside rules
  if (genes.has('arma') || genes.has('rmtb')) {
    predictions.push({
      antibiotic: 'Amikacin',
      result: 'Resistant',
      confidence: 0.99,
      reason: '16S rRNA methyltransferase (armA/rmtB) provides high-level aminoglycoside resistance.'
    });
  }

  // Quinolone rules
  if (genes.has('qnrs1') || genes.has('aac(6\')-ib-cr')) {
    predictions.push({
      antibiotic: 'Ciprofloxacin',
      result: 'Resistant',
      confidence: 0.85,
      reason: 'Plasmid-mediated quinolone resistance (PMQR) markers detected.'
    });
  }

  // Tetracycline rules
  if (genes.has('tet(a)')) {
    predictions.push({
      antibiotic: 'Tetracycline',
      result: 'Resistant',
      confidence: 0.90,
      reason: 'Efflux pump tet(A) detected.'
    });
  }

  // Default susceptible if no major markers found (simplified for demo)
  const antibiotics = ['Meropenem', 'Ceftazidime', 'Amikacin', 'Ciprofloxacin', 'Tetracycline'];
  antibiotics.forEach(abx => {
    if (!predictions.find(p => p.antibiotic === abx)) {
      predictions.push({
        antibiotic: abx,
        result: 'Susceptible',
        confidence: 0.60,
        reason: 'No primary resistance markers detected for this antibiotic.'
      });
    }
  });

  return predictions;
}
