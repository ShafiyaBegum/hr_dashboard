export const departments = [
    "Engineering",
    "Human Resources",
    "Marketing",
    "Sales",
    "Finance",
    "Customer Support",
  ];
  
  export function getRandomDepartment() {
    return departments[Math.floor(Math.random() * departments.length)];
  }
  
  export function getRandomPerformance() {
    return Math.floor(Math.random() * 5) + 1; // 1 to 5 stars
  }
  