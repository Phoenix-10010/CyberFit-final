import data_protection_act18 from './assessments/data_protection_act18.json'
import gdpr from './assessments/gdpr.json'
import hipaa from './assessments/hipaa.json'
import nist_csf from './assessments/nist_csf.json'
import nist_ir_825 from './assessments/nist_ir_825.json'
import nist_sp800_171 from './assessments/nist_sp800_171.json'
import nist_sp800_218 from './assessments/nist_sp800_218.json'
import nist_sp800_53 from './assessments/nist_sp800_53.json'
import pci_dss from './assessments/pci_dss.json'



export const frameworkOptions = {
  general: [
    // General frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "HIPAA", path: "hipaa", data: hipaa },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
    { name: "NIST IR 825", path: "nist_ir_825", data: nist_ir_825 },
    { name: "NIST SP 800 218", path: "nist_sp800_218", data: nist_sp800_218 },
    { name: "NIST SP 800 53", path: "nist_sp800_53", data: nist_sp800_53 },
    { name: "NIST SP 800 171", path: "nist_sp800_171", data: nist_sp800_171 },
    { name: "PCI DSS", path: "pci_dss", data: pci_dss },
  ],
  education: [
    // Education frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
  ],
  energy: [
    // Energy frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
    { name: "NIST SP 800 53", path: "nist_sp800_53", data: nist_sp800_53 },
    { name: "NIST SP 800 171", path: "nist_sp800_171", data: nist_sp800_171 },
  ],
  finance: [
    // Finance frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
    { name: "NIST SP 800 53", path: "nist_sp800_53", data: nist_sp800_53 },
    { name: "NIST SP 800 171", path: "nist_sp800_171", data: nist_sp800_171 },
    { name: "PCI DSS", path: "pci_dss", data: pci_dss },
  ],
  government: [
    // Government frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
    { name: "NIST SP 800 53", path: "nist_sp800_53", data: nist_sp800_53 },
    { name: "NIST SP 800 171", path: "nist_sp800_171", data: nist_sp800_171 },
  ],
  healthcare: [
    // Healthcare frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "HIPAA", path: "hipaa", data: hipaa },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
    { name: "NIST IR 825", path: "nist_ir_825", data: nist_ir_825 },
    { name: "NIST SP 800 53", path: "nist_sp800_53", data: nist_sp800_53 },
    { name: "NIST SP 800 171", path: "nist_sp800_171", data: nist_sp800_171 },
    { name: "PCI DSS", path: "pci_dss", data: pci_dss },
  ],
  hospitality: [
    // Hospitality frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
  ],
  manufacturing: [
    // Manufacturing frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
    { name: "NIST SP 800 53", path: "nist_sp800_53", data: nist_sp800_53 },
    { name: "NIST SP 800 171", path: "nist_sp800_171", data: nist_sp800_171 },
  ],
  retail: [
    // Retail frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
    { name: "PCI DSS", path: "pci_dss", data: pci_dss },
  ],
  telecommunications: [
    // Telecommunications frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
  ],
  transportation: [
    // Transportation frameworks
    { name: "Data Protection Act 18", path: "data_protection_act18", data: data_protection_act18 },
    { name: "GDPR", path: "gdpr", data: gdpr },
    { name: "NIST CSF", path: "nist_csf", data: nist_csf },
  ],
  // Add more industry-specific framework options
};

export const industryOptions = [
  { value: "general", label: "General" },
  { value: "education", label: "Education" },
  { value: "energy", label: "Energy and Utilities" },
  { value: "finance", label: "Finance" },
  { value: "government", label: "Government and Public Sector" },
  { value: "healthcare", label: "Healthcare" },
  { value: "hospitality", label: "Hospitality and Tourism" },
  { value: "manufacturing", label: "Manufacturing and Industrial" },
  { value: "retail", label: "Retail and E-commerce" },
  { value: "telecommunications", label: "Telecommunications" },
  { value: "transportation", label: "Transportation and Logistics" },
  // Add more industry options as needed
];
