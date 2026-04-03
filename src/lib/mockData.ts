import { BacterialIsolate } from '../types';

export const MOCK_ISOLATES: BacterialIsolate[] = [
  {
    id: 'IND-MUM-001',
    species: 'Klebsiella pneumoniae',
    source: 'Clinical',
    location: 'Mumbai, Maharashtra',
    resistanceGenes: ['blaNDM-1', 'blaOXA-48', 'blaSHV-12', 'armA'],
    susceptibility: [
      { antibiotic: 'Meropenem', result: 'Resistant', mic: 64 },
      { antibiotic: 'Colistin', result: 'Susceptible', mic: 1 },
      { antibiotic: 'Amikacin', result: 'Resistant', mic: 128 },
      { antibiotic: 'Piperacillin/Tazobactam', result: 'Resistant', mic: 128 },
      { antibiotic: 'Ciprofloxacin', result: 'Resistant', mic: 32 },
    ],
    metadata: {
      collectionDate: '2024-03-15',
      sequencingMethod: 'Illumina MiSeq',
    },
  },
  {
    id: 'IND-DEL-002',
    species: 'Acinetobacter baumannii',
    source: 'Clinical',
    location: 'New Delhi, Delhi',
    resistanceGenes: ['blaOXA-23', 'blaNDM-1', 'aph(3\')-VIa'],
    susceptibility: [
      { antibiotic: 'Imipenem', result: 'Resistant', mic: 32 },
      { antibiotic: 'Tigecycline', result: 'Intermediate', mic: 4 },
      { antibiotic: 'Gentamycin', result: 'Resistant', mic: 64 },
      { antibiotic: 'Ceftazidime', result: 'Resistant', mic: 128 },
    ],
    metadata: {
      collectionDate: '2024-03-20',
      sequencingMethod: 'Oxford Nanopore',
    },
  },
  {
    id: 'IND-BLR-003',
    species: 'Salmonella Typhi',
    source: 'Clinical',
    location: 'Bangalore, Karnataka',
    resistanceGenes: ['blaTEM-1', 'catA1', 'sul2', 'dfrA7'],
    susceptibility: [
      { antibiotic: 'Ciprofloxacin', result: 'Resistant', mic: 8 },
      { antibiotic: 'Ceftriaxone', result: 'Susceptible', mic: 0.25 },
      { antibiotic: 'Azithromycin', result: 'Intermediate', mic: 16 },
      { antibiotic: 'Chloramphenicol', result: 'Resistant', mic: 64 },
    ],
    metadata: {
      collectionDate: '2024-03-25',
      sequencingMethod: 'Illumina MiSeq',
    },
  },
];

export const GENE_NETWORK_DATA = {
  nodes: [
    { id: 'blaNDM-1', group: 1, description: 'New Delhi metallo-beta-lactamase' },
    { id: 'blaOXA-48', group: 1, description: 'Carbapenem-hydrolyzing oxacillinase' },
    { id: 'blaOXA-23', group: 1, description: 'Oxacillinase common in Acinetobacter' },
    { id: 'blaTEM-1', group: 1, description: 'Broad-spectrum beta-lactamase' },
    { id: 'armA', group: 2, description: '16S rRNA methyltransferase' },
    { id: 'aph(3\')-VIa', group: 2, description: 'Aminoglycoside phosphotransferase' },
    { id: 'catA1', group: 3, description: 'Chloramphenicol acetyltransferase' },
    { id: 'sul2', group: 4, description: 'Sulfonamide resistance' },
  ],
  links: [
    { source: 'blaNDM-1', target: 'armA', value: 8 },
    { source: 'blaNDM-1', target: 'blaOXA-48', value: 4 },
    { source: 'blaOXA-23', target: 'aph(3\')-VIa', value: 5 },
    { source: 'blaTEM-1', target: 'catA1', value: 3 },
    { source: 'blaNDM-1', target: 'sul2', value: 2 },
  ],
};
