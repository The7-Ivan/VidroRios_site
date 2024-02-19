import { Company } from "@/types/dbInterfaces";

const fetchCompanies = async () => {
  try {
    const response = await fetch('/api/companies');
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    return [];
  }
};

let companiesCache: Company[]; 

const getCompanies = async () => {
  if (!companiesCache) {
    companiesCache = await fetchCompanies();
  }
  return companiesCache;
};

export default getCompanies;
