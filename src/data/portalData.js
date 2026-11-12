// Initial realistic departmental data for AVNIET Internal Management System

export const INITIAL_DATA = {
  management: {
    title: "Executive Management",
    clearance: "Level 1 - Master Super-Admin (Highest Access)",
    user: {
      name: "Dr. K. S. Rao",
      roleTitle: "Principal & Secretary",
      id: "MGT-001",
      email: "principal@avniet.ac.in",
    },
    tasks: [
      { id: "m1", title: "Approve 2026-27 AI & Data Science Laboratory budget allocation", priority: "High", completed: false, category: "Finance", dueDate: "Today" },
      { id: "m2", title: "Review faculty workload audit submitted by Academic Dean", priority: "High", completed: true, category: "Academic", dueDate: "Completed" },
      { id: "m3", title: "Sign authorization for JNTUH Autonomous compliance inspection", priority: "Medium", completed: false, category: "Governance", dueDate: "Tomorrow" },
      { id: "m4", title: "Evaluate final campus placement offer statistics with TPO head", priority: "High", completed: false, category: "Placement", dueDate: "Today" },
      { id: "m5", title: "Sanction 250 new IEEE journal subscriptions for central library", priority: "Medium", completed: false, category: "Library", dueDate: "Nov 15" }
    ],
    stats: {
      totalStaff: 184,
      totalStudents: 2450,
      activePrograms: 8,
      annualBudgetUtilization: "78.4%"
    }
  },

  library: {
    title: "Library Operations & Resource Center",
    clearance: "Departmental Access (Circulation & Catalog)",
    user: {
      name: "S. Rama Rao",
      roleTitle: "Chief Librarian",
      id: "LIB-101",
      email: "library@avniet.ac.in",
    },
    tasks: [
      { id: "l1", title: "Process daily return of 145 textbooks for B.Tech CSE Semester 4", priority: "High", completed: false, category: "Circulation", dueDate: "Today, 4:00 PM" },
      { id: "l2", title: "Catalog 42 newly received Springer Engineering handbooks", priority: "Medium", completed: true, category: "Cataloging", dueDate: "Completed" },
      { id: "l3", title: "Send automated overdue notices to 28 students with pending fines", priority: "High", completed: false, category: "Notices", dueDate: "Today, 5:30 PM" },
      { id: "l4", title: "Inspect Block-C RFID self-checkout scanner kiosks", priority: "Medium", completed: false, category: "Maintenance", dueDate: "Tomorrow" },
      { id: "l5", title: "Prepare monthly book acquisition report for Principal review", priority: "Normal", completed: false, category: "Reports", dueDate: "Nov 16" }
    ],
    stats: {
      booksIssuedToday: 138,
      returnsPending: 42,
      digitalJournalsActive: 1250,
      todayFootfall: 420
    },
    records: [
      { id: "BK-8821", title: "Introduction to Algorithms (Cormen)", student: "K. Harsha (21AV1A0542)", date: "Today, 10:15 AM", status: "Issued" },
      { id: "BK-7719", title: "Modern Operating Systems (Tanenbaum)", student: "M. Rahul (22AV1A0518)", date: "Today, 11:30 AM", status: "Issued" },
      { id: "BK-6320", title: "Machine Learning Foundations", student: "P. Sneha (21AV1A1204)", date: "Today, 01:10 PM", status: "Returned" },
      { id: "BK-4412", title: "Signals and Systems (Oppenheim)", student: "V. Sai (22AV1A0412)", date: "Today, 02:20 PM", status: "Issued" },
      { id: "BK-9011", title: "VLSI Circuit Design", student: "A. Bhavani (20AV1A0401)", date: "Yesterday", status: "Overdue (Fine: ₹50)" }
    ]
  },

  placement: {
    title: "Training & Placement Cell (TPO)",
    clearance: "Departmental Access (Corporate Relations & Drives)",
    user: {
      name: "Dr. K. V. Sharma",
      roleTitle: "Head - Training & Placements",
      id: "TPO-501",
      email: "placements@avniet.ac.in",
    },
    tasks: [
      { id: "p1", title: "Coordinate TCS Digital on-campus recruitment drive (Round 2)", priority: "High", completed: false, category: "Campus Drive", dueDate: "Today, 2:00 PM" },
      { id: "p2", title: "Verify eligibility spreadsheet of 185 students for Cognizant drive", priority: "High", completed: true, category: "Verification", dueDate: "Completed" },
      { id: "p3", title: "Conduct mock technical interview sessions for ECE final years", priority: "Medium", completed: false, category: "Training", dueDate: "Today, 4:30 PM" },
      { id: "p4", title: "Follow up with Infosys HR partner regarding offer letter dispatch", priority: "High", completed: false, category: "Corporate", dueDate: "Tomorrow" },
      { id: "p5", title: "Upload updated student resume repository to campus drive", priority: "Normal", completed: false, category: "Records", dueDate: "Nov 15" }
    ],
    stats: {
      activeDrivesThisWeek: 4,
      totalOffersReleased: 312,
      highestPackage: "24.5 LPA",
      avgPackage: "6.8 LPA"
    },
    records: [
      { company: "TCS Digital", role: "Systems Engineer", package: "7.5 LPA", eligibleCount: 142, status: "Ongoing Interview" },
      { company: "Cognizant GenC", role: "Programmer Analyst", package: "6.5 LPA", eligibleCount: 185, status: "Shortlist Released" },
      { company: "Invesco Ltd", role: "Software Associate", package: "12.0 LPA", eligibleCount: 45, status: "Offer Letters Issued (18 Placed)" },
      { company: "ServiceNow", role: "Associate Developer", package: "16.8 LPA", eligibleCount: 28, status: "Final Round Scheduled" },
      { company: "Accenture", role: "Advance Tech Associate", package: "4.5 LPA", eligibleCount: 220, status: "Written Test Completed" }
    ]
  }
};

