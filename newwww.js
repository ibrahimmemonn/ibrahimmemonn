import { log } from "@webhr/common";
import useApi from "../../../src/hooks/useApi";

const { getNotificationDetailsWebViewUrl } = useApi();

export const navigateToScreen = async (
  module,
  id,
  item,
  navigation,
  showDetailsModal
) => {
  switch (module) {
    case "Forms":
      navigation.navigate("FormDetail", {
        id: id,
      });
      break;
    case "Scheduler":
      navigation.navigate("SchedulerDetail", {
        id: id,
      });
      break;
    case "Travels":
      navigation.navigate("TravelsDetail", {
        id: id,
      });
      break;
    case "Worksheet":
      navigation.navigate("WorksheetDetail", {
        id: id,
        showDocument: true,
      });
      break;
    case "EmployeeHours":
      navigation.navigate("EmployeeHoursDetail", {
        id: id,
      });
      break;
    case "Transfers":
      navigation.navigate("TransfersDetail", {
        id: id,
      });
      break;
    case "Warnings":
      navigation.navigate("WarningDetail", {
        id: id,
      });
      break;
    case "Achievements":
      navigation.navigate("AchievementsDetail", {
        id: id,
      });
      break;
    case "Resignations":
      navigation.navigate("ResignationDetail", {
        id: id,
      });
      break;
    case "Promotions":
      navigation.navigate("PromotionDetail", {
        id: id,
      });
      break;
    case "Terminations":
      navigation.navigate("TerminationsDetail", {
        id: id,
      });
      break;
    case "Complaints":
      navigation.navigate("ComplaintsDetail", {
        id: id,
      });
      break;
    case "Memos":
      navigation.navigate("MemosDetail", {
        id: id,
      });
      break;
    case "Incidents":
      navigation.navigate("IncidentDetail", {
        id: id,
      });
      break;
    case "Contracts":
      navigation.navigate("ContractDetail", {
        id: id,
      });
      break;
    case "JobRequests":
      navigation.navigate("JobRequestDetail", {
        id: id,
      });
      break;
    case "Deductions":
      navigation.navigate("DeductionDetail", {
        id: id,
      });
      break;
    case "Adjustments":
      navigation.navigate("AdjustmentsDetail", {
        id: id,
      });
      break;
    case "Bonuses":
      navigation.navigate("BonusesDetail", {
        id: id,
      });
      break;
    case "Commissions":
      navigation.navigate("CommissionsDetail", {
        id: id,
      });
      break;
    case "Loans":
      navigation.navigate("LoanDetail", {
        id: id,
      });
      break;
    case "AdvanceSalary":
      navigation.navigate("AdvanceSalaryDetail", {
        id: id,
      });
      break;
    case "Overtimes":
      navigation.navigate("OvertimesDetail", {
        id: id,
      });
      break;
    case "FinalSettlements":
      navigation.navigate("FinalSettlementsDetail", {
        id: id,
      });
      break;
    case "CostToCompany":
      navigation.navigate("CostToCompanyDetail", {
        id: id,
      });
      break;
    case "Earnings":
      navigation.navigate("EarningsDetail", {
        id: id,
      });
      break;
    case "HRLetters":
      navigation.navigate("HRLetters", {
        id: id,
      });
      break;
    case "HRLetters_Candidates":
      navigation.navigate("CandidatesLetter", {
        id: id,
      });
      break;
    case "SalaryChanges":
      navigation.navigate("SalaryChangesDetail", {
        id: id,
      });
      break;
    case "HRBudget_Budget":
      navigation.navigate("BudgetDetail", {
        id: id,
      });
      break;
    case "HRBudget_Planning":
      navigation.navigate("PlanningDetail", {
        id: id,
        showDocument: true,
      });
      break;
    case "Expense":
      navigation.navigate("ExpenseDetail", {
        id: id,
      });
      return;
    case "TrainingNeedsAssessment":
      navigation.navigate("Training", {
        id: id,
      });
      break;

    default:
      const url = await getNotificationDetailsWebViewUrl(
        id,
        `${item.Module}_${module}`
      );
      log("====UR:", url);
      showDetailsModal(item, url);
      break;
  }
};
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import SyncDown from "../screens/syncdown/SyncDown";
import BottomNavigationWrapper from "../components/BottomNavigationWrapper";
import ModuleGrid from "../common/ModuleGrid";
import Companies from "../screens/organization/companies/Companies";
import AddCompanies from "../screens/organization/companies/AddCompanies";
import CompaniesDetail from "../screens/organization/companies/CompaniesDetail";
import Divisions from "../screens/organization/divisions/Divisions";
import AddDivisions from "../screens/organization/divisions/AddDivisions";
import DivisionsDetail from "../screens/organization/divisions/DivisionsDetails";
import Departments from "../screens/organization/departments/Departments";
import AddDepartment from "../screens/organization/departments/AddDepartment";
import DepartmentsDetail from "../screens/organization/departments/DepartmentsDetail";
import Stations from "../screens/organization/stations/Stations";
import AddStations from "../screens/organization/stations/AddStations";
import StationsDetail from "../screens/organization/stations/StationsDetail";
import Annoucements from "../screens/organization/annoucement/Annoucements";
import AddAnnouncement from "../screens/organization/annoucement/AddAnnouncement";
import AnnouncementDetail from "../screens/organization/annoucement/AnnouncementDetail";
import Policies from "../screens/policies/Policies";
import Policy from "../screens/policies/Policy";
import RecruitmentDashboard from "../screens/recruitmentnew/dashboard/RecruitmentDashboard";
import Screening from "../screens/recruitmentnew/screening/Screening";
import ScreeningStages from "../screens/recruitmentnew/screeningstages/ScreeningStages";
import CandidateProfile from "../screens/recruitmentnew/candidateprofile/CandidateProfile";
import CandidatePersonalInfo from "../screens/recruitmentnew/candidatepersonalinfo/CandidatePersonalInfo";
import CandidateProfileDetail from "../screens/recruitmentnew/candidateprofiledetail/CandidateProfileDetail";
import ScreeningActivity from "../screens/recruitmentnew/screeningactivity/ScreeningActivity";
import JobInterviews from "../screens/recruitmentnew/jobinterviews/JobInterviews";
import JobCandidateSummary from "../screens/recruitmentnew/jobcandidatesummary/JobCandidateSummary";
import EvaluateCandidate from "../screens/recruitmentnew/evaluatecandidate/EvaluateCandidate";
import EvaluateCandidateForm from "../screens/recruitmentnew/evaluatecandidate/EvaluateCandidateForm";
import AddJobInterview from "../screens/recruitmentnew/jobinterviews/AddJobInterview";
import JobInterviewDetail from "../screens/recruitmentnew/jobinterviews/JobInterviewDetail";
import RecruitmentProvider from "../context/recruitment/RecruitmentProvider";
import SearchCandidates from "../screens/recruitmentnew/searchcandidates/SearchCandidates";
import JobRequests from "../screens/recruitmentnew/jobrequests/JobRequest";
import AddJobRequest from "../screens/recruitmentnew/jobrequests/AddJobRequest";
import JobRequestDetail from "../screens/recruitmentnew/jobrequests/JobRequestDetail";
import JobPosts from "../screens/recruitmentnew/jobposts/JobPosts";
import JobPostDetail from "../screens/recruitmentnew/jobposts/JobPostDetail";
import AddJobPost from "../screens/recruitmentnew/jobposts/AddJobPost";
import JobCandidate from "../screens/recruitmentnew/jobcandidates/JobCandidate";
import AddJobCandidate from "../screens/recruitmentnew/jobcandidates/AddJobCandidate";
import JobCandidatesDetail from "../screens/recruitmentnew/jobcandidates/JobCandidateDetail";
import JobTests from "../screens/recruitmentnew/jobTests/JobTests";
import AddJobTests from "../screens/recruitmentnew/jobTests/AddJobTests";
import JobTestsDetail from "../screens/recruitmentnew/jobTests/JobTestsDetail";
import CandidateGroups from "../screens/recruitmentnew/candidategroups/CandidateGroups";
import AddCandidateGroups from "../screens/recruitmentnew/candidategroups/AddCandidateGroups";
import CandidateGroupDetail from "../screens/recruitmentnew/candidategroups/CandidateGroupDetail";
import Survey from "../screens/survey/Survey";
import SurveyDashboard from "../screens/surveyModule/dashboard/SurveyDashboard";
import SurveyView from "../screens/surveyModule/dashboard/SurveyView";
import EmployeeSurveys from "../screens/surveyModule/employeeSurveys/EmployeesSurveys";
import EmployeesSurveysDetail from "../screens/surveyModule/employeeSurveys/EmployeesSurveysDetail";
import SendEmployeeSurvey from "../screens/surveyModule/SendEmployeeSurvey";
import EmployeeSurveyPending from "../screens/surveyModule/employeeSurveyPending/EmployeeSurveyPending";
import EmployeeSurveyPendingDetail from "../screens/surveyModule/employeeSurveyPending/EmployeeSurveyPendingDetail";
import EmployeeSurveyCompleted from "../screens/surveyModule/employeeSurveyCompleted/EmployeeSurveyCompleted";
import EmployeeSurveyCompletedDetail from "../screens/surveyModule/employeeSurveyCompleted/EmployeeSurveyCompletedDetail";
import JobCandidateSurveys from "../screens/surveyModule/jobSurveyCandidate/JobCandidateSurveys";
import JobSurveyCandidateDetail from "../screens/surveyModule/jobSurveyCandidate/JobSurveyCandidateDetail";
import Employees from "../screens/employees/employees/Employees";
import EmployeesDetail from "../screens/employees/employees/EmployeesDetail";
import AddEmployee from "../screens/employees/employees/AddEmployee";
import EmployeeCardView from "../screens/employees/employees/EmployeeCardView";
import Contracts from "../screens/employees/contracts/Contracts";
import ContractDetail from "../screens/employees/contracts/ContractDetail";
import AddContract from "../screens/employees/contracts/AddContract";
import AddAssignment from "../screens/employees/assignments/AddAssignment";
import AssignmentDetail from "../screens/employees/assignments/AssignmentDetail";
import Assignments from "../screens/employees/assignments/Assignments";
import Transfers from "../screens/employees/transfers/Transfers";
import AddTransfers from "../screens/employees/transfers/AddTransfer";
import TransferDetail from "../screens/employees/transfers/TransferDetail";
import Resignations from "../screens/employees/resignations/Resignations";
import AddResignation from "../screens/employees/resignations/AddResignation";
import ResignationDetail from "../screens/employees/resignations/ResignationDetail";
import AddPromotion from "../screens/employees/promotions/AddPromotion";
import PromotionDetail from "../screens/employees/promotions/PromotionDetail";
import Promotions from "../screens/employees/promotions/Promotions";
import AddTermination from "../screens/employees/terminations/AddTermination";
import TerminationDetail from "../screens/employees/terminations/TerminationDetail";
import Terminations from "../screens/employees/terminations/Terminations";
import AddComplaint from "../screens/employees/complaints/AddComplaint";
import ComplaintDetail from "../screens/employees/complaints/ComplaintDetail";
import Complaints from "../screens/employees/complaints/Complaints";
import AddWarning from "../screens/employees/warnings/AddWarning";
import WarningDetail from "../screens/employees/warnings/WarningDetail";
import Warnings from "../screens/employees/warnings/Warnings";
import AchievementDetail from "../screens/employees/achievements/AchievementDetail";
import Achievements from "../screens/employees/achievements/Achievements";
import AddAchievement from "../screens/employees/achievements/AddAchievement";
import AddMemos from "../screens/employees/memos/AddMemos";
import Memos from "../screens/employees/memos/Memos";
import MemosDetail from "../screens/employees/memos/MemosDetail";
import AddPoll from "../screens/employees/polls/AddPoll";
import PollDetail from "../screens/employees/polls/PollDetail";
import Polls from "../screens/employees/polls/Polls";
import AddEmployeesExit from "../screens/employees/employeesexit/AddEmployeesExit";
import EmployeesExit from "../screens/employees/employeesexit/EmployeesExit";
import EmployeesExitDetail from "../screens/employees/employeesexit/EmployeesExitDetail";
import AddIncidents from "../screens/employees/incidents/AddIncidents";
import IncidentDetail from "../screens/employees/incidents/IncidentDetail";
import Incidents from "../screens/employees/incidents/Incidents";
import AddSuggestions from "../screens/employees/suggestions/AddSuggetion";
import SuggestionDetail from "../screens/employees/suggestions/SuggestionDetail";
import Suggestions from "../screens/employees/suggestions/Suggestions";
import AddDiscipline from "../screens/employees/discipline/AddDiscipline";
import Discipline from "../screens/employees/discipline/Discipline";
import DisciplineDetail from "../screens/employees/discipline/DisciplineDetail";
import DashboardEmployeesList from "../screens/timesheet/DashboardEmployeesList";
import TimesheetDashboard from "../screens/timesheet/TimesheetDashboard";
import AddAttendance from "../screens/timesheet/attendance/AddAttendance";
import MobileAttendance from "../screens/timesheet/Attendance";
import Attendance from "../screens/timesheet/attendance/Attendance";
import AttendanceDetail from "../screens/timesheet/attendance/AttendanceDetail";
import AutoAttendance from "../screens/timesheet/AutoAttendance";
import WorkFromHome from "../screens/timesheet/workFromHome/WorkFromHome";
import WorkFromHomeDetail from "../screens/timesheet/workFromHome/WorkFromHomeDetail";
import AddWorkFromHome from "../screens/timesheet/workFromHome/AddWorkFromHome";
import Leaves from "../screens/timesheet/leaves/Leaves";
import LeavesDetail from "../screens/timesheet/leaves/LeavesDetail";
import AddLeave from "../common/AddRecordWebView";
import AddEmployeeHours from "../screens/timesheet/employeeHours/AddEmployeeHours";
import EmployeeHours from "../screens/timesheet/employeeHours/EmployeeHours";
import EmployeeHoursDetail from "../screens/timesheet/employeeHours/EmployeeHoursDetail";
import AddWorksheet from "../screens/timesheet/worksheet/AddWorksheet";
import Worksheet from "../screens/timesheet/worksheet/Worksheet";
import WorksheetDetail from "../screens/timesheet/worksheet/WorksheetDetail";
import AddHolidays from "../screens/timesheet/holidays/AddHolidays";
import Holidays from "../screens/timesheet/holidays/Holidays";
import HolidaysDetail from "../screens/timesheet/holidays/HolidaysDetail";
import PayrollDashboard from "../screens/payroll/dashboard/Dashboard";
import AddPaySlips from "../screens/payroll/paySlips/AddPaySlips";
import PaySlips from "../screens/payroll/paySlips/PaySlips";
import PaySlip from "../screens/payroll/PaySlip";
import HourlyWages from "../screens/payroll/hourlyWages/HourlyWages";
import HourlyWagesDetail from "../screens/payroll/hourlyWages/HourlyWagesDetail";
import AddHourlyWages from "../screens/payroll/hourlyWages/AddHourlyWages";
import SalaryChangesDetail from "../screens/payroll/salaryChanges/SalaryChangesDetail";
import SalaryChanges from "../screens/payroll/salaryChanges/SalaryChanges";
import AddSalaryChanges from "../screens/payroll/salaryChanges/AddSalaryChanges";
import AddAdvanceSalary from "../screens/payroll/advancesalary/AddAdvanceSalary";
import AdvanceSalary from "../screens/payroll/advancesalary/AdvanceSalary";
import AdvanceSalaryDetail from "../screens/payroll/advancesalary/AdvanceSalaryDetail";
import AddDeduction from "../screens/payroll/deduction/AddDeduction";
import Deduction from "../screens/payroll/deduction/Deduction";
import DeductionDetail from "../screens/payroll/deduction/DeductionDetail";
import AddBonus from "../screens/payroll/bonuses/AddBonus";
import BonusDetail from "../screens/payroll/bonuses/BonusDetail";
import Bonuses from "../screens/payroll/bonuses/Bonuses";
import AddCommission from "../screens/payroll/commissions/AddCommission";
import CommissionDetail from "../screens/payroll/commissions/CommissionDetail";
import Commissions from "../screens/payroll/commissions/Commissions";
import AddOvertimes from "../screens/payroll/overtimes/AddOvertimes";
import Overtimes from "../screens/payroll/overtimes/Overtimes";
import OvertimesDetail from "../screens/payroll/overtimes/OvertimesDetail";
import AddAdjustments from "../screens/payroll/adjustments/AddAdjustments";
import Adjustments from "../screens/payroll/adjustments/Adjustments";
import AdjustmentsDetail from "../screens/payroll/adjustments/AdjustmentsDetail";
import AddLoan from "../screens/payroll/loans/AddLoan";
import LoanDetail from "../screens/payroll/loans/LoanDetail";
import Loans from "../screens/payroll/loans/Loans";
import AddReimbursements from "../screens/payroll/reimbursments/AddReimbursements";
import ReimbursementsDetail from "../screens/payroll/reimbursments/ReimbursementsDetail";
import Reimbursments from "../screens/payroll/reimbursments/Reimbursments";
import AddProvidentFund from "../screens/payroll/providentfund/AddProvidentFund";
import ProvidentFund from "../screens/payroll/providentfund/ProvidentFund";
import ProvidentFundDetail from "../screens/payroll/providentfund/ProvidentFundDetail";
import AddInsurance from "../screens/payroll/insurance/AddInsurance";
import Insurance from "../screens/payroll/insurance/Insurance";
import InsuranceDetail from "../screens/payroll/insurance/InsuranceDetail";
import AddFinalSettlements from "../screens/payroll/finalSettlements/AddFinalSettlements";
import FinalSettlements from "../screens/payroll/finalSettlements/FinalSettlements";
import FinalSettlementsDetail from "../screens/payroll/finalSettlements/FinalSettlementsDetail";
import AddCostToCompany from "../screens/payroll/costToCompany/AddCostToCompany";
import CostToCompany from "../screens/payroll/costToCompany/CostToCompany";
import CostToCompanyDetail from "../screens/payroll/costToCompany/CostToCompanyDetail";
import Etrack from "../screens/etrack/Etrack";
import WellnessVaccine from "../screens/wellness/WellnessVaccine";
import VaccineDetail from "../screens/wellness/VaccineDetails";
import AddVaccine from "../screens/wellness/AddVaccine";
import WellnessScreening from "../screens/wellness/Screening";
import AddEditContactTracking from "../screens/wellness/contactTracking/AddContactTracking";
import ContactTracking from "../screens/wellness/contactTracking/ContactTracking";
import ContactTrackingDetail from "../screens/wellness/contactTracking/ContactTrackingDetails";
import AddTravel from "../screens/employees/travel/AddTravel";
import Travels from "../screens/employees/travel/Travels";
import TravelsDetail from "../screens/employees/travel/TravelsDetail";
import BenefitsDashboard from "../screens/benefits/BenefitsDashboard";
import AddClaims from "../screens/benefits/claims/AddClaims";
import Claims from "../screens/benefits/claims/Claims";
import ClaimsDetail from "../screens/benefits/claims/ClaimsDetail";
import AssignedCoursesDetail from "../screens/trainingsModule/dashboard/assignedCourses/AssignedCoursesDetail";
import AssignTraining from "../screens/trainingsModule/dashboard/AssignTraining";
import ReassignCourse from "../screens/trainingsModule/dashboard/pendingCourses/ReassignCourse";
import TrainingCourses from "../screens/trainingsModule/dashboard/TrainingCourses";
import TrainingDashboard from "../screens/trainingsModule/dashboard/TrainingDashboard";
import Trainings from "../screens/trainingsModule/dashboard/Trainings";
import AddEmployeeTrainings from "../screens/trainingsModule/employeesTraining/AddEmployeeTrainings";
import EmployeeTrainings from "../screens/trainingsModule/employeesTraining/EmployeeTrainings";
import EmployeeTrainingsDetail from "../screens/trainingsModule/employeesTraining/EmployeeTrainingsDetail";
import AddTrainingNeeds from "../screens/trainingsModule/trainingNeeds/AddTrainingNeeds";
import TrainingNeeds from "../screens/trainingsModule/trainingNeeds/TrainingNeeds";
import TrainingNeedsDetail from "../screens/trainingsModule/trainingNeeds/TrainingNeedsDetail";
import AddTrainingEvent from "../screens/trainingsModule/trainingEvents/AddTrainingEvent";
import TrainingEvents from "../screens/trainingsModule/trainingEvents/TrainingEvents";
import TrainingEventsDetail from "../screens/trainingsModule/trainingEvents/TrainingEventsDetail";
import AddTrainingRequest from "../screens/trainingsModule/trainingrequest/AddTrainingRequest";
import TrainingRequest from "../screens/trainingsModule/trainingrequest/TrainingRequest";
import TrainingRequestDetail from "../screens/trainingsModule/trainingrequest/TrainingRequestDetail";
import AddTrainsers from "../screens/trainingsModule/trainers/AddTrainsers";
import Trainers from "../screens/trainingsModule/trainers/Trainers";
import TrainersDetail from "../screens/trainingsModule/trainers/TrainersDetail";
import TrainingsCalendar from "../screens/trainingsModule/TrainingsCalendar";
import AddProjects from "../screens/projects/projects/AddProjects";
import Projects from "../screens/projects/projects/Projects";
import ProjectsDetail from "../screens/projects/projects/ProjectsDetail";
import AddTask from "../screens/projects/tasks/AddTask";
import TaskDetail from "../screens/projects/tasks/TaskDetail";
import Tasks from "../screens/projects/tasks/Tasks";
import AddClient from "../screens/projects/clients/AddClient";
import Client from "../screens/projects/clients/Client";
import ClientDetails from "../screens/projects/clients/ClientDetails";
import EmployeeTasks from "../screens/projects/resource/EmployeeTasks";
import Resources from "../screens/projects/resource/Resources";
import EmployeeAppreciations from "../screens/recognition/dashboard/EmployeeAppreciations";
import Recognition from "../screens/recognition/dashboard/Index";
import AddAppreciation from "../screens/recognition/dashboard/AddAppreciation";
import AddRewardTypes from "../screens/recognition/rewardsTypes/AddRewardTypes";
import RDashboard from "../screens/recognition/dashboard/Dashboard";
import RewardTypes from "../screens/recognition/rewardsTypes/RewardTypes";
import RewardTypesDetail from "../screens/recognition/rewardsTypes/RewardTypesDetail";
import AddBalance from "../screens/recognition/balance/AddBalance";
import Balance from "../screens/recognition/balance/Balance";
import BalanceDetail from "../screens/recognition/balance/BalanceDetail";
import AddRedeem from "../screens/recognition/redeem/AddRedeem";
import Redeem from "../screens/recognition/redeem/Redeem";
import RedeemDetail from "../screens/recognition/redeem/RedeemDetail";
import ExpenseDashboard from "../screens/expense/ExpenseDashboard";
import AddExpenseItem from "../screens/expense/additem/AddExpenseItem";
import FillExpense from "../screens/expense/FillExpense";
import FillExpenseDetail from "../screens/expense/FillExpenseDetail";
import ExpenseDetail from "../screens/expense/expense/ExpenseDetail";
import Expense from "../screens/expense/expense/Expense";
import ViewExpenseItem from "../screens/expense/expense/ViewExpenseItem";
import ExpenseProvider from "../context/expense/ExpenseProvider";
import AddGoalProgress from "../screens/goals/AddGoalProgress";
import MyGoalDetails from "../screens/goals/MyGoalDetails";
import MyGoals from "../screens/goals/MyGoals";
import Dashboard from "../screens/hrletters/dashboard/Dashboard";
import SendHRLetter from "../screens/hrletters/SendHRLetter";
import LetterFilesItems from "../screens/hrletters/dashboard/LetterFilesItems";
import LetterFoldersItem from "../screens/hrletters/dashboard/LetterFoldersItem";
import EmployeeLetters from "../screens/hrletters/employeeLetters/EmployeeLetters";
import EmployeeLettersDetail from "../screens/hrletters/employeeLetters/EmployeeLettersDetail";
import CandidateLetters from "../screens/hrletters/candidateLetters/CandidateLetters";
import CandidateLettersDetail from "../screens/hrletters/candidateLetters/CandidateLettersDetail";
import AssetsDashboard from "../screens/assets/Dashboard";
import AssetCheckIn from "../screens/assets/AssetCheckIn";
import AssetCheckOut from "../screens/assets/AssetCheckOut";
import AddAsset from "../screens/assets/assets/AddAsset";
import AssetDetail from "../screens/assets/assets/AssetDetail";
import Assets from "../screens/assets/assets/Assets";
import Checkout from "../screens/assets/checkout/Checkout";
import CheckoutDetail from "../screens/assets/checkout/CheckoutDetail";
import AssetVendorDetail from "../screens/assets/vendor/AssetVendorDetail";
import AssetVendors from "../screens/assets/vendor/AssetVendors";
import AddAssetVendor from "../screens/assets/vendor/AddAssetVendor";
import PurchaseOrderRequest from "../screens/assets/purchaseorderrequest/PurchaseOrderRequest";
import PurchaseOrderRequestDetail from "../screens/assets/purchaseorderrequest/PurchaseOrderRequestDetail";
import AddPurchaseOrderRequest from "../screens/assets/purchaseorderrequest/AddPurchaseOrderRequest";
import PurchaseOrder from "../screens/assets/purchaseorder/PurchaseOrder";
import PurchaseOrderDetail from "../screens/assets/purchaseorder/PurchaseOrderDetail";
import AddPurchaseOrder from "../screens/assets/purchaseorder/AddPurchaseOrder";
import PurchaseOrderInvoices from "../screens/assets/purchaseorderinvoices/PurchaseOrderInvoices";
import PurchaseOrderInvoicesDetail from "../screens/assets/purchaseorderinvoices/PurchaseOrderInvoicesDetail";
import AddPurchaseOrderInvoice from "../screens/assets/purchaseorderinvoices/AddPurchaseOrderInvoice";
import FillForm from "../screens/formnew/FillForm";
import FormDashboard from "../screens/formModule/dashboard/Dashboard";
import FilesItem from "../screens/formModule/dashboard/FilesItems";
import FoldersItem from "../screens/formModule/dashboard/FoldersItem";
import SendEmployeeForm from "../screens/formModule/SendEmployeeForm";
import SendExternalForm from "../screens/formModule/SendExternalForm";
import EmployeeForm from "../screens/formModule/employeeForms/EmployeeForm";
import EmployeeFormsDetail from "../screens/formModule/employeeForms/EmployeeFormsDetail";
import ExternalFormDetail from "../screens/formModule/externalForms/ExternalFormDetail";
import ExternalForm from "../screens/formModule/externalForms/ExternalForms";
import JobCandidateForm from "../screens/formModule/jobCandidate/JobCandidateForm";
import JobCandidateFormDetail from "../screens/formModule/jobCandidate/JobCandidateFormDetail";
import PerformanceFormDetail from "../screens/formModule/performanceForms/PerformanceFormDetail";
import PerformanceForm from "../screens/formModule/performanceForms/PerformanceForms";
import Reviews from "../screens/performanceModule/Reviews";
import ReviewsDetail from "../screens/performanceModule/ReviewsDetail";
import PendingReviews from "../screens/performanceModule/pendingreviews/PendingReviews";
import PendingReviewsDetail from "../screens/performanceModule/pendingreviews/PendingReviewsDetail";
import CompletedReviewDetail from "../screens/performanceModule/completereview/CompletedReviewDetail";
import CompletedReviews from "../screens/performanceModule/completereview/CompletedReviews";
import EmployeeKPI from "../screens/performanceModule/employeekpi/EmployeeKPI";
import EmployeeKPIDetail from "../screens/performanceModule/employeekpi/EmployeeKPIDetail";
import ShowKPIDetail from "../screens/performanceModule//components/ShowKPIDetail";
import SendReview from "../screens/performanceModule/SendReview";
import AllDocuments from "../screens/eSignatureModule/dashboard/AllDouments";
import ESignatureDashboard from "../screens/eSignatureModule/dashboard/Dashboard";
import NewSignature from "../screens/eSignatureModule/NewSignature";
import EditPendongESignature from "../screens/eSignatureModule/pending/EditPendongESignature";
import PendingDoc from "../screens/eSignatureModule/pending/PendingDoc";
import PendingDocsDetail from "../screens/eSignatureModule/pending/PendingDocsDetail";
import SignedDocs from "../screens/eSignatureModule/signed/SignedDocs";
import SignedDocsDetail from "../screens/eSignatureModule/signed/SignedDocsDetail";
import ModulePendingDocsDetail from "../screens/eSignatureModule/modulePending/ModulePendingDetail";
import ModulePendingDoc from "../screens/eSignatureModule/modulePending/ModulePendingDoc";
import ModuleSignedDocDetail from "../screens/eSignatureModule/moduleSigned/ModuleSignedDocDetail";
import ModuleSinedDoc from "../screens/eSignatureModule/moduleSigned/ModuleSinedDoc";
import HRBudgetDashboard from "../screens/hrBudget/dashboard/Dashboard";
import AddPlanning from "../screens/hrBudget/planning/AddPlanning";
import Planning from "../screens/hrBudget/planning/Planning";
import PlanningDetail from "../screens/hrBudget/planning/PlanningDetail";
import AddBudget from "../screens/hrBudget/budget/AddBudget";
import Budget from "../screens/hrBudget/budget/Budget";
import BudgetDetail from "../screens/hrBudget/budget/BudgetDetail";
import AddOpenPosition from "../screens/hrBudget/openPositions/AddOpenPosition";
import OpenPosition from "../screens/hrBudget/openPositions/OpenPosition";
import OpenPositionDetail from "../screens/hrBudget/openPositions/OpenPositionDetail";
import Search from "../screens/search/Search";
import Reports from "../screens/reports/Reports";
import Files from "../screens/files/Files";
import AddScheduler from "../screens/scheduler/AddScheduler";
import Scheduler from "../screens/scheduler/SchedulerScreen";
import SwapShift from "../screens/scheduler/SwapShift";
import IndoorTracking from "../screens/indoortracking/IndoorTracking";
import IndoorTrackingHistory from "../screens/indoortracking/History";
import Documents from "../screens/documents/Documents";
import ChangePassword from "../screens/settings/ChangePassword";
import eSignature from "../screens/settings/eSignature";
import PersonalInfo from "../screens/settings/PersonalInfo";
import SelectTheme from "../screens/settings/SelectTheme";
import SettingScreen from "../screens/settings/Setting";
import About from "../screens/about/About";
import Developer from "../screens/developer/Developer";
import LanguageMissingWords from "../screens/developer/LanguageMissingWords";
import ViewNotificationTokens from "../screens/developer/ViewNotificationTokens";
import ViewUserData from "../screens/developer/ViewUserData";
import Call from "../screens/messenger/CallNew";
import Chat from "../screens/messenger/Chat";
import EmployeesList from "../screens/messenger/EmployeeList";
import Training from "../screens/trainings/index";
import ThankYou from "../screens/trainings/ThankYou";
import TestTraining from "../screens/trainings/TestTraining";
import FailTest from "../screens/trainings/FailTest";
import TestComplete from "../screens/trainings/TestComplete";
import PerformanceProvider from "../context/performance/PerformanceProvider";
import AddKPI from "../screens/performance/AddKPI";
import AddKPIAndObjective from "../screens/performance/AddKPIAndObjective";
import AddObjective from "../screens/performance/AddObjective";
import Performance from "../screens/performance/Performance";
import WritePerformance from "../screens/performance/WritePerformance";
import Competency from "../screens/performance/competency/Competency";
import AdditionalQuestions from "../screens/performance/additionalquestions/AdditionalQuestions";
import PersonalDevelopment from "../screens/performance/personalDevelopment/PersonalDevelopment";

import OnboardNavigator from "./OnboardNavigator";
import SignPdf from "../screens/signpdf/SignPdf";
import ESignature from "../screens/esignature/ESignature";
import Birthdays from "../screens/birthdays/Birthdays";
import CustomWebView from "../common/CustomWebView";
import DirectoryDetail from "../screens/directory/DirectoryDetail";
import { default as NewModuleDetail } from "../common/NewModuleDetail";
import PDFViewer from "../screens/pdfpreview/PDFPreview";
import AvatarScreen from "../screens/avatars/AvatarScreen";
import Reminder from "../screens/reminder/Reminder";
import RemindersList from "../screens/reminder/ReminderList";
import AddEvent from "../screens/calendar/AddEvent";
import AddMeeting from "../screens/calendar/AddMeeting";
import AddCustomItemTable from "../screens/assets/components/AddItemsTable";
import Discussions from "../screens/discussions/Discussions";
import PayrollMyPayslips from "../screens/payroll/dashboard/MyPayslipsGrid";
import EmployeeInfo from "../screens/hrBudget/dashboard/EmployeeInfo";
import LeaveSummaryDetail from "../screens/leaves/LeaveSummaryDetail";
import JoinedBackForm from "../screens/timesheet/joinback/JoinedBackForm";
import Anniversary from "../screens/anniversaries/Anniversary";
import QuickAccessOptions from "../screens/quickaccess/QuickAccessOptions";
import Acknowledgement from "../screens/home/dashboard/Acknowledgement";

import useAuth from "../hooks/useAuth";
import RecentCandidates from "../screens/recruitmentnew/recentcandidates/RecentCandidates";
import CandidateInterview from "../screens/recruitmentnew/interviewcalendar/CandidateInterview";
import ApprovalList from "../screens/home/dashboard/ApprovalList";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useAuth();
  const isFirstTimeSync = useSelector((state) => state.webhr.isFirstTimeSync);
  const syncDown = useSelector((state) => state.webhr.syncDown);
  if (syncDown || isFirstTimeSync != "1") {
    return <SyncDown />;
  }

  if (user?.FirstLogin == 1) {
    return <OnboardNavigator />;
  }
  return (
    <RecruitmentProvider>
      <ExpenseProvider>
        <PerformanceProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {/* <Stack.Screen name="Main" component={HomeNavigator} />
      <Stack.Screen name="MainNotifications" component={Notifications} />
      <Stack.Screen name="MainChat" component={ChatNavigator} />
      <Stack.Screen name="MainCall" component={Call} />
      <Stack.Screen name="AllStationsClock" component={AllStationsClock} />
      <Stack.Screen name="DirectCallIOS" component={DirectCallIOS} /> */}
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigationWrapper}
            />
            <Stack.Screen name="ModuleGrid" component={ModuleGrid} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Reports" component={Reports} />
            <Stack.Screen name="Files" component={Files} />
            <Stack.Screen name="Onboarding" component={OnboardNavigator} />
            <Stack.Screen name="Birthdays" component={Birthdays} />
            <Stack.Screen name="CustomWebView" component={CustomWebView} />
            <Stack.Screen name="EmployeeDetail" component={DirectoryDetail} />
            <Stack.Screen name="NewModuleDetails" component={NewModuleDetail} />
            <Stack.Screen name="PDFViewer" component={PDFViewer} />
            <Stack.Screen name="AvatarScreen" component={AvatarScreen} />
            <Stack.Screen name="Reminders" component={Reminder} />
            <Stack.Screen name="RemindersList" component={RemindersList} />
            <Stack.Screen name="Discussions" component={Discussions} />
            <Stack.Screen name="Anniversaries" component={Anniversary} />
            {/* Companies */}
            <Stack.Screen name="Companies" component={Companies} />
            <Stack.Screen name="AddCompanies" component={AddCompanies} />
            <Stack.Screen name="CompaniesDetail" component={CompaniesDetail} />
            {/* Divisions */}
            <Stack.Screen name="Divisions" component={Divisions} />
            <Stack.Screen name="AddDivisions" component={AddDivisions} />
            <Stack.Screen name="DivisionsDetail" component={DivisionsDetail} />
            {/* Departments */}
            <Stack.Screen name="Departments" component={Departments} />
            <Stack.Screen name="AddDepartment" component={AddDepartment} />
            <Stack.Screen
              name="DepartmentsDetail"
              component={DepartmentsDetail}
            />
            {/* Stations */}
            <Stack.Screen name="Stations" component={Stations} />
            <Stack.Screen name="AddStations" component={AddStations} />
            <Stack.Screen name="StationsDetail" component={StationsDetail} />
            {/* Announcements */}
            <Stack.Screen name="Announcements" component={Annoucements} />
            <Stack.Screen name="AddAnnouncement" component={AddAnnouncement} />
            <Stack.Screen
              name="AnnouncementDetail"
              component={AnnouncementDetail}
            />
            {/* Policies */}
            <Stack.Screen name="Policies" component={Policies} />
            <Stack.Screen name="Policy" component={Policy} />
            {/* Recruitment Dashboard*/}
            <Stack.Screen
              name="RecruitmentDashboard"
              component={RecruitmentDashboard}
            />
            <Stack.Screen
              name="RecentCandidates"
              component={RecentCandidates}
            />
            <Stack.Screen
              name="CandidatesInterview"
              component={CandidateInterview}
            />
            {/* Recruitment Screening */}
            <Stack.Screen name="Screening" component={Screening} />
            <Stack.Screen name="ScreeningStages" component={ScreeningStages} />
            <Stack.Screen
              name="CandidateProfile"
              component={CandidateProfile}
            />
            <Stack.Screen
              name="CandidatePersonalInfo"
              component={CandidatePersonalInfo}
            />
            <Stack.Screen
              name="CandidateProfileDetail"
              component={CandidateProfileDetail}
            />
            <Stack.Screen
              name="ScreeningActivity"
              component={ScreeningActivity}
            />
            <Stack.Screen
              name="JobCandidateSummary"
              component={JobCandidateSummary}
            />
            <Stack.Screen
              name="EvaluateCandidate"
              component={EvaluateCandidate}
            />
            <Stack.Screen
              name="EvaluateCandidateForm"
              component={EvaluateCandidateForm}
            />
            {/* Recruitment Job Interviews */}
            <Stack.Screen name="JobInterviews" component={JobInterviews} />
            <Stack.Screen name="AddJobInterviews" component={AddJobInterview} />
            <Stack.Screen
              name="JobInterviewDetail"
              component={JobInterviewDetail}
            />
            {/* Search Candidates */}
            <Stack.Screen
              name="SearchCandidates"
              component={SearchCandidates}
            />
            {/* Job Requests */}
            <Stack.Screen name="JobRequest" component={JobRequests} />
            <Stack.Screen name="AddJobRequest" component={AddJobRequest} />
            <Stack.Screen
              name="JobRequestDetail"
              component={JobRequestDetail}
            />
            {/* Job Post */}
            <Stack.Screen name="JobPosts" component={JobPosts} />
            <Stack.Screen name="JobPostDetail" component={JobPostDetail} />
            <Stack.Screen name="AddJobPost" component={AddJobPost} />
            {/* Job Candidates */}
            <Stack.Screen name="JobCandidate" component={JobCandidate} />
            <Stack.Screen name="AddJobCandidate" component={AddJobCandidate} />
            <Stack.Screen
              name="JobCandidateDetail"
              component={JobCandidatesDetail}
            />
            {/* Job Tests */}
            <Stack.Screen name="JobTests" component={JobTests} />
            <Stack.Screen name="AddJobTests" component={AddJobTests} />
            <Stack.Screen name="JobTestsDetail" component={JobTestsDetail} />
            {/* Candidate Groups */}
            <Stack.Screen name="CandidateGroups" component={CandidateGroups} />
            <Stack.Screen
              name="AddCandidateGroups"
              component={AddCandidateGroups}
            />
            <Stack.Screen
              name="CandidateGroupsDetail"
              component={CandidateGroupDetail}
            />
            {/* Fill Survey */}
            <Stack.Screen name="Survey" component={Survey} />
            {/* Survey Dashboard */}
            <Stack.Screen name="SurveyDashboard" component={SurveyDashboard} />
            <Stack.Screen name="SurveyView" component={SurveyView} />
            {/* Employee Survey */}
            <Stack.Screen name="EmployeesSurveys" component={EmployeeSurveys} />
            <Stack.Screen
              name="EmployeesSurveysDetail"
              component={EmployeesSurveysDetail}
            />
            <Stack.Screen
              name="SendEmployeeSurvey"
              component={SendEmployeeSurvey}
            />
            {/* Pending Survey */}
            <Stack.Screen
              name="EmployeeSurveyPending"
              component={EmployeeSurveyPending}
            />
            <Stack.Screen
              name="EmployeeSurveyPendingDetail"
              component={EmployeeSurveyPendingDetail}
            />
            {/* Completed Survey */}
            <Stack.Screen
              name="EmployeeSurveyCompleted"
              component={EmployeeSurveyCompleted}
            />
            <Stack.Screen
              name="EmployeeSurveyCompletedDetail"
              component={EmployeeSurveyCompletedDetail}
            />
            {/* Job Candidate Survet */}
            <Stack.Screen
              name="JobCandidateSurveys"
              component={JobCandidateSurveys}
            />
            <Stack.Screen
              name="JobSurveyCandidateDetail"
              component={JobSurveyCandidateDetail}
            />
            {/* Employees */}
            <Stack.Screen name="Employees" component={Employees} />
            <Stack.Screen name="EmployeesDetail" component={EmployeesDetail} />
            <Stack.Screen name="AddEmployee" component={AddEmployee} />
            <Stack.Screen
              name="EmployeeCardView"
              component={EmployeeCardView}
            />
            {/* Contracts */}
            <Stack.Screen name="Contracts" component={Contracts} />
            <Stack.Screen name="ContractDetail" component={ContractDetail} />
            <Stack.Screen name="AddContract" component={AddContract} />
            {/* Assignments */}
            <Stack.Screen name="Assignments" component={Assignments} />
            <Stack.Screen
              name="AssignmentDetail"
              component={AssignmentDetail}
            />
            <Stack.Screen name="AddAssignment" component={AddAssignment} />
            {/* Transfers */}
            <Stack.Screen name="Transfers" component={Transfers} />
            <Stack.Screen name="AddTransfer" component={AddTransfers} />
            <Stack.Screen name="TransferDetail" component={TransferDetail} />
            {/* Resignations */}
            <Stack.Screen name="Resignations" component={Resignations} />
            <Stack.Screen
              name="ResignationDetail"
              component={ResignationDetail}
            />
            <Stack.Screen name="AddResignation" component={AddResignation} />
            {/* Promotions */}
            <Stack.Screen name="Promotions" component={Promotions} />
            <Stack.Screen name="PromotionDetail" component={PromotionDetail} />
            <Stack.Screen name="AddPromotion" component={AddPromotion} />
            {/* Terminations */}
            <Stack.Screen name="Terminations" component={Terminations} />
            <Stack.Screen
              name="TerminationDetail"
              component={TerminationDetail}
            />
            <Stack.Screen name="AddTermination" component={AddTermination} />
            {/* Complaints */}
            <Stack.Screen name="Complaints" component={Complaints} />
            <Stack.Screen name="ComplaintDetail" component={ComplaintDetail} />
            <Stack.Screen name="AddComplaint" component={AddComplaint} />
            {/* Warnings */}
            <Stack.Screen name="Warnings" component={Warnings} />
            <Stack.Screen name="WarningDetail" component={WarningDetail} />
            <Stack.Screen name="AddWarning" component={AddWarning} />
            {/* Achievements */}
            <Stack.Screen name="Achievements" component={Achievements} />
            <Stack.Screen
              name="AchievementDetail"
              component={AchievementDetail}
            />
            <Stack.Screen name="AddAchievement" component={AddAchievement} />
            {/* Travels */}
            <Stack.Screen name="Travels" component={Travels} />
            <Stack.Screen name="TravelsDetail" component={TravelsDetail} />
            <Stack.Screen name="AddTravel" component={AddTravel} />
            {/* Memos */}
            <Stack.Screen name="Memos" component={Memos} />
            <Stack.Screen name="AddMemos" component={AddMemos} />
            <Stack.Screen name="MemosDetail" component={MemosDetail} />
            {/* Polls */}
            <Stack.Screen name="Polls" component={Polls} />
            <Stack.Screen name="PollDetail" component={PollDetail} />
            <Stack.Screen name="AddPoll" component={AddPoll} />
            {/* Employee Exit */}
            <Stack.Screen name="EmployeesExit" component={EmployeesExit} />
            <Stack.Screen
              name="EmployeesExitDetail"
              component={EmployeesExitDetail}
            />
            <Stack.Screen
              name="AddEmployeesExit"
              component={AddEmployeesExit}
            />
            {/* Incidents */}
            <Stack.Screen name="Incidents" component={Incidents} />
            <Stack.Screen name="IncidentDetail" component={IncidentDetail} />
            <Stack.Screen name="AddIncident" component={AddIncidents} />
            {/* Suggestions */}
            <Stack.Screen name="Suggestions" component={Suggestions} />
            <Stack.Screen name="AddSuggestion" component={AddSuggestions} />
            <Stack.Screen
              name="SuggestionDetail"
              component={SuggestionDetail}
            />
            {/* Discipline */}
            <Stack.Screen name="Discipline" component={Discipline} />
            <Stack.Screen name="AddDiscipline" component={AddDiscipline} />
            <Stack.Screen
              name="DisciplineDetail"
              component={DisciplineDetail}
            />
            {/* Timesheet Dashboard */}
            <Stack.Screen
              name="TimesheetDashboard"
              component={TimesheetDashboard}
            />
            <Stack.Screen
              name="DashboardEmployees"
              component={DashboardEmployeesList}
            />
            <Stack.Screen
              name="EmployeeDetailFromModule"
              component={DirectoryDetail}
            />
            {/* Attendance */}
            <Stack.Screen name="AutoAttendance" component={AutoAttendance} />
            <Stack.Screen name="Attendance" component={MobileAttendance} />
            <Stack.Screen name="AttendanceModule" component={Attendance} />
            <Stack.Screen
              name="AttendanceDetail"
              component={AttendanceDetail}
            />
            <Stack.Screen name="AddAttendance" component={AddAttendance} />

            {/* WorkFromHome */}
            <Stack.Screen name="WorkFromHome" component={WorkFromHome} />
            <Stack.Screen
              name="WorkFromHomeDetail"
              component={WorkFromHomeDetail}
            />
            <Stack.Screen name="AddWorkFromHome" component={AddWorkFromHome} />

            {/* Leaves */}
            <Stack.Screen
              name="LeaveSummaryDetail"
              component={LeaveSummaryDetail}
            />
            <Stack.Screen name="Leaves" component={Leaves} />
            <Stack.Screen name="LeavesDetail" component={LeavesDetail} />
            <Stack.Screen name="AddLeave" component={AddLeave} />
            <Stack.Screen name="JoinedBackForm" component={JoinedBackForm} />
            {/* EmployeeHours */}
            <Stack.Screen name="EmployeeHours" component={EmployeeHours} />
            <Stack.Screen
              name="EmployeeHoursDetail"
              component={EmployeeHoursDetail}
            />
            <Stack.Screen
              name="AddEmployeeHours"
              component={AddEmployeeHours}
            />
            {/* Worksheet */}
            <Stack.Screen name="Worksheet" component={Worksheet} />
            <Stack.Screen name="WorksheetDetail" component={WorksheetDetail} />
            <Stack.Screen name="AddWorksheet" component={AddWorksheet} />
            {/* Holidays */}
            <Stack.Screen name="Holidays" component={Holidays} />
            <Stack.Screen name="HolidaysDetail" component={HolidaysDetail} />
            <Stack.Screen name="AddHolidays" component={AddHolidays} />
            {/* Payroll Dashboard */}
            <Stack.Screen
              name="PayrollDashboard"
              component={PayrollDashboard}
            />
            <Stack.Screen
              name="PayrollMyPayslips"
              component={PayrollMyPayslips}
            />
            {/* Salary Payslips */}
            <Stack.Screen name="PaySlips" component={PaySlips} />
            <Stack.Screen name="PaySlip" component={PaySlip} />
            <Stack.Screen name="AddPaySlips" component={AddPaySlips} />
            {/* HourlyWages */}
            <Stack.Screen name="HourlyWages" component={HourlyWages} />
            <Stack.Screen
              name="HourlyWagesDetail"
              component={HourlyWagesDetail}
            />
            <Stack.Screen name="AddHourlyWages" component={AddHourlyWages} />
            {/* SalaryChanges */}
            <Stack.Screen name="SalaryChanges" component={SalaryChanges} />
            <Stack.Screen
              name="SalaryChangesDetail"
              component={SalaryChangesDetail}
            />
            <Stack.Screen
              name="AddSalaryChanges"
              component={AddSalaryChanges}
            />
            {/* AdvanceSalary */}
            <Stack.Screen name="AdvanceSalary" component={AdvanceSalary} />
            <Stack.Screen
              name="AdvanceSalaryDetail"
              component={AdvanceSalaryDetail}
            />
            <Stack.Screen
              name="AddAdvanceSalary"
              component={AddAdvanceSalary}
            />
            {/* Deduction */}
            <Stack.Screen name="Deduction" component={Deduction} />
            <Stack.Screen name="DeductionDetail" component={DeductionDetail} />
            <Stack.Screen name="AddDeduction" component={AddDeduction} />
            {/* Bonuses */}
            <Stack.Screen name="Bonuses" component={Bonuses} />
            <Stack.Screen name="AddBonus" component={AddBonus} />
            <Stack.Screen name="BonusDetail" component={BonusDetail} />
            {/* Commissions */}
            <Stack.Screen name="Commissions" component={Commissions} />
            <Stack.Screen name="AddCommission" component={AddCommission} />
            <Stack.Screen
              name="CommissionDetail"
              component={CommissionDetail}
            />
            {/* Overtimes */}
            <Stack.Screen name="Overtimes" component={Overtimes} />
            <Stack.Screen name="AddOvertimes" component={AddOvertimes} />
            <Stack.Screen name="OvertimesDetail" component={OvertimesDetail} />
            {/* Adjustments */}
            <Stack.Screen name="Adjustments" component={Adjustments} />
            <Stack.Screen
              name="AdjustmentsDetail"
              component={AdjustmentsDetail}
            />
            <Stack.Screen name="AddAdjustments" component={AddAdjustments} />
            {/* Loans */}
            <Stack.Screen name="Loans" component={Loans} />
            <Stack.Screen name="LoanDetail" component={LoanDetail} />
            <Stack.Screen name="AddLoan" component={AddLoan} />
            {/* Reimbursments */}
            <Stack.Screen name="Reimbursements" component={Reimbursments} />
            <Stack.Screen
              name="ReimbursementsDetail"
              component={ReimbursementsDetail}
            />
            <Stack.Screen
              name="AddReimbursements"
              component={AddReimbursements}
            />
            {/* ProvidentFund */}
            <Stack.Screen name="ProvidentFund" component={ProvidentFund} />
            <Stack.Screen
              name="ProvidentFundDetail"
              component={ProvidentFundDetail}
            />
            <Stack.Screen
              name="AddProvidentFund"
              component={AddProvidentFund}
            />
            {/* Insurance */}
            <Stack.Screen name="Insurance" component={Insurance} />
            <Stack.Screen name="InsuranceDetail" component={InsuranceDetail} />
            <Stack.Screen name="AddInsurance" component={AddInsurance} />
            {/* FinalSettlements */}
            <Stack.Screen
              name="FinalSettlements"
              component={FinalSettlements}
            />
            <Stack.Screen
              name="FinalSettlementsDetail"
              component={FinalSettlementsDetail}
            />
            <Stack.Screen
              name="AddFinalSettlements"
              component={AddFinalSettlements}
            />
            {/* CostToCompany */}
            <Stack.Screen name="CostToCompany" component={CostToCompany} />
            <Stack.Screen
              name="CostToCompanyDetail"
              component={CostToCompanyDetail}
            />
            <Stack.Screen
              name="AddCostToCompany"
              component={AddCostToCompany}
            />
            {/* eTrack */}
            <Stack.Screen name="eTrack" component={Etrack} />
            {/* Wellness Screening */}
            <Stack.Screen
              name="WellnessScreening"
              component={WellnessScreening}
            />
            {/* Vaccine */}
            <Stack.Screen name="Vaccine" component={WellnessVaccine} />
            <Stack.Screen name="VaccineDetail" component={VaccineDetail} />
            <Stack.Screen name="AddVaccine" component={AddVaccine} />
            {/* ContactTracking */}
            <Stack.Screen name="ContactTracking" component={ContactTracking} />
            <Stack.Screen
              name="ContactTrackingDetail"
              component={ContactTrackingDetail}
            />
            <Stack.Screen
              name="AddEditContactTracking"
              component={AddEditContactTracking}
            />
            {/* Benefits Dashboard */}
            <Stack.Screen
              name="BenefitsDashboard"
              component={BenefitsDashboard}
            />
            {/* Claims */}
            <Stack.Screen name="Claims" component={Claims} />
            <Stack.Screen name="ClaimsDetail" component={ClaimsDetail} />
            <Stack.Screen name="AddClaims" component={AddClaims} />
            {/* My Goals */}
            <Stack.Screen name="MyGoals" component={MyGoals} />
            <Stack.Screen name="MyGoalDetails" component={MyGoalDetails} />
            <Stack.Screen name="AddGoalProgress" component={AddGoalProgress} />
            {/* HR Letter Dashboard*/}
            <Stack.Screen name="HRLetters" component={Dashboard} />
            {/* Employee Letters */}
            <Stack.Screen name="EmployeeLetters" component={EmployeeLetters} />
            <Stack.Screen
              name="EmployeeLettersDetail"
              component={EmployeeLettersDetail}
            />
            {/* Candidate Letters */}
            <Stack.Screen
              name="CandidateLetters"
              component={CandidateLetters}
            />
            <Stack.Screen
              name="CandidateLettersDetail"
              component={CandidateLettersDetail}
            />
            {/* HR Letter */}
            <Stack.Screen name="SendHRLetter" component={SendHRLetter} />
            <Stack.Screen
              name="LetterFilesItems"
              component={LetterFilesItems}
            />
            <Stack.Screen
              name="LetterFoldersItem"
              component={LetterFoldersItem}
            />
            {/* Assets Dashboard */}
            <Stack.Screen name="AssetsDashboard" component={AssetsDashboard} />
            {/* Assets */}
            <Stack.Screen name="Assets" component={Assets} />
            <Stack.Screen name="AddAsset" component={AddAsset} />
            <Stack.Screen name="AssetDetail" component={AssetDetail} />
            <Stack.Screen name="AssetCheckIn" component={AssetCheckIn} />
            <Stack.Screen name="AssetCheckOut" component={AssetCheckOut} />
            <Stack.Screen
              name="AddCustomItemTable"
              component={AddCustomItemTable}
            />
            {/* Checkout */}
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="CheckoutDetail" component={CheckoutDetail} />
            {/* Asset vendors */}
            <Stack.Screen name="AssetVendors" component={AssetVendors} />
            <Stack.Screen name="AddAssetVendor" component={AddAssetVendor} />
            <Stack.Screen
              name="AssetVendorDetail"
              component={AssetVendorDetail}
            />
            {/* Purchase Order Request */}
            <Stack.Screen
              name="PurchaseOrderRequest"
              component={PurchaseOrderRequest}
            />
            <Stack.Screen
              name="AddPurchaseOrderRequest"
              component={AddPurchaseOrderRequest}
            />
            <Stack.Screen
              name="PurchaseOrderRequestDetail"
              component={PurchaseOrderRequestDetail}
            />
            {/* Purchase Order Invoice */}
            <Stack.Screen
              name="PurchaseOrderInvoice"
              component={PurchaseOrderInvoices}
            />
            <Stack.Screen
              name="AddPurchaseOrderInvoice"
              component={AddPurchaseOrderInvoice}
            />
            <Stack.Screen
              name="PurchaseOrderInvoicesDetail"
              component={PurchaseOrderInvoicesDetail}
            />
            {/* Fill Form */}
            <Stack.Screen name="Form" component={FillForm} />
            <Stack.Screen name="SelfForm" component={FillForm} />
            {/* Send Form */}
            <Stack.Screen
              name="SendEmployeeForm"
              component={SendEmployeeForm}
            />
            <Stack.Screen
              name="SendExternalForm"
              component={SendExternalForm}
            />
            {/* Forms Dashboard */}
            <Stack.Screen name="FormDashboard" component={FormDashboard} />
            <Stack.Screen name="FoldersItem" component={FoldersItem} />
            <Stack.Screen name="FilesItem" component={FilesItem} />
            {/* Employee Forms */}
            <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
            <Stack.Screen
              name="EmployeeFormDetails"
              component={EmployeeFormsDetail}
            />
            {/* External Forms */}
            <Stack.Screen name="ExternalForm" component={ExternalForm} />
            <Stack.Screen
              name="ExternalFormDetails"
              component={ExternalFormDetail}
            />
            {/* Job Candidate Form */}
            <Stack.Screen
              name="JobCandidateForm"
              component={JobCandidateForm}
            />
            <Stack.Screen
              name="JobCandidateFormDetails"
              component={JobCandidateFormDetail}
            />
            {/* Performance */}
            <Stack.Screen name="Performance" component={Performance} />
            <Stack.Screen
              name="WritePerformance"
              component={WritePerformance}
            />
            <Stack.Screen
              name="AddKPIAndObjective"
              component={AddKPIAndObjective}
            />
            <Stack.Screen name="AddObjective" component={AddObjective} />
            <Stack.Screen name="AddKPI" component={AddKPI} />
            <Stack.Screen name="Competency" component={Competency} />
            <Stack.Screen
              name="AdditionalQuestions"
              component={AdditionalQuestions}
            />
            <Stack.Screen
              name="PersonalDevelopment"
              component={PersonalDevelopment}
            />
            {/* Performance Form */}
            <Stack.Screen name="PerformanceForm" component={PerformanceForm} />
            <Stack.Screen
              name="PerformanceFormDetail"
              component={PerformanceFormDetail}
            />
            {/* Trainings */}
            <Stack.Screen name="Training" component={Training} />
            <Stack.Screen name="ThankYou" component={ThankYou} />
            <Stack.Screen name="TestTraining" component={TestTraining} />
            <Stack.Screen name="FailTest" component={FailTest} />
            <Stack.Screen name="TestComplete" component={TestComplete} />
            {/* Trainings Dashboard */}
            <Stack.Screen
              name="TrainingDashboard"
              component={TrainingDashboard}
            />
            <Stack.Screen name="TrainingCourses" component={TrainingCourses} />
            <Stack.Screen name="ReassignCourse" component={ReassignCourse} />
            <Stack.Screen name="Trainings" component={Trainings} />
            <Stack.Screen name="AssignTraining" component={AssignTraining} />
            <Stack.Screen
              name="AssignedCoursesDetail"
              component={AssignedCoursesDetail}
            />
            {/* EmployeeTrainings */}
            <Stack.Screen
              name="EmployeeTrainings"
              component={EmployeeTrainings}
            />
            <Stack.Screen
              name="EmployeeTrainingsDetail"
              component={EmployeeTrainingsDetail}
            />
            <Stack.Screen
              name="AddEmployeeTrainings"
              component={AddEmployeeTrainings}
            />
            {/* Training Needs */}
            <Stack.Screen name="TrainingNeeds" component={TrainingNeeds} />
            <Stack.Screen
              name="TrainingNeedsDetail"
              component={TrainingNeedsDetail}
            />
            <Stack.Screen
              name="AddTrainingNeeds"
              component={AddTrainingNeeds}
            />
            {/* Training Events */}
            <Stack.Screen name="TrainingEvents" component={TrainingEvents} />
            <Stack.Screen
              name="TrainingEventsDetail"
              component={TrainingEventsDetail}
            />
            <Stack.Screen
              name="AddTrainingEvent"
              component={AddTrainingEvent}
            />
            {/* Training Request */}
            <Stack.Screen name="TrainingRequest" component={TrainingRequest} />
            <Stack.Screen
              name="TrainingRequestDetail"
              component={TrainingRequestDetail}
            />
            <Stack.Screen
              name="AddTrainingRequest"
              component={AddTrainingRequest}
            />
            {/* Trainers */}
            <Stack.Screen name="Trainers" component={Trainers} />
            <Stack.Screen name="TrainersDetail" component={TrainersDetail} />
            <Stack.Screen name="AddTrainsers" component={AddTrainsers} />
            {/* TrainingsCalendar */}
            <Stack.Screen
              name="TrainingsCalendar"
              component={TrainingsCalendar}
            />
            {/* Projects */}
            <Stack.Screen name="Projects" component={Projects} />
            <Stack.Screen name="ProjectsDetail" component={ProjectsDetail} />
            <Stack.Screen name="AddProjects" component={AddProjects} />
            {/* Tasks */}
            <Stack.Screen name="Tasks" component={Tasks} />
            <Stack.Screen name="TaskDetail" component={TaskDetail} />
            <Stack.Screen name="AddTask" component={AddTask} />
            {/* Clients */}
            <Stack.Screen name="Client" component={Client} />
            <Stack.Screen name="ClientDetail" component={ClientDetails} />
            <Stack.Screen name="AddClient" component={AddClient} />
            {/* Resources */}
            <Stack.Screen name="Resources" component={Resources} />
            <Stack.Screen name="EmployeeTasks" component={EmployeeTasks} />
            {/* Recognition Dashboard */}
            <Stack.Screen name="Recognition" component={Recognition} />
            <Stack.Screen
              name="EmployeeAppreciations"
              component={EmployeeAppreciations}
            />
            <Stack.Screen name="AddAppreciation" component={AddAppreciation} />
            {/* Reward Types */}

            <Stack.Screen name="RDashboard" component={RDashboard} />
            <Stack.Screen name="RewardTypes" component={RewardTypes} />
            <Stack.Screen
              name="RewardTypesDetail"
              component={RewardTypesDetail}
            />
            <Stack.Screen name="AddRewardTypes" component={AddRewardTypes} />
            {/* Balance */}
            <Stack.Screen name="Balance" component={Balance} />
            <Stack.Screen name="BalanceDetail" component={BalanceDetail} />
            <Stack.Screen name="AddBalance" component={AddBalance} />
            {/* Redeem */}
            <Stack.Screen name="Redeem" component={Redeem} />
            <Stack.Screen name="RedeemDetail" component={RedeemDetail} />
            <Stack.Screen name="AddRedeem" component={AddRedeem} />
            {/* Expense Dashboard */}
            <Stack.Screen
              name="ExpenseDashboard"
              component={ExpenseDashboard}
            />
            {/* Expense */}
            <Stack.Screen name="ExpenseGrid" component={Expense} />
            <Stack.Screen name="FillExpense" component={FillExpense} />
            <Stack.Screen
              name="FillExpenseDetail"
              component={FillExpenseDetail}
            />
            <Stack.Screen name="AddExpenseItem" component={AddExpenseItem} />
            <Stack.Screen name="ExpenseDetail" component={ExpenseDetail} />
            <Stack.Screen name="ViewExpenseItem" component={ViewExpenseItem} />
            {/* Purchase Order */}
            <Stack.Screen name="PurchaseOrder" component={PurchaseOrder} />
            <Stack.Screen
              name="AddPurchaseOrder"
              component={AddPurchaseOrder}
            />
            <Stack.Screen
              name="PurchaseOrderDetail"
              component={PurchaseOrderDetail}
            />
            {/* Performance Reviews */}
            <Stack.Screen name="Reviews" component={Reviews} />
            <Stack.Screen name="ReviewsDetail" component={ReviewsDetail} />
            {/* Pending Reviews */}
            <Stack.Screen name="PendingReviews" component={PendingReviews} />
            <Stack.Screen
              name="PendingReviewsDetail"
              component={PendingReviewsDetail}
            />
            {/* Completed Reviews */}
            <Stack.Screen
              name="CompletedReviews"
              component={CompletedReviews}
            />
            <Stack.Screen
              name="CompletedReviewDetail"
              component={CompletedReviewDetail}
            />
            {/* Employee KPIs */}
            <Stack.Screen name="EmployeeKPI" component={EmployeeKPI} />
            <Stack.Screen
              name="EmployeeKPIDetail"
              component={EmployeeKPIDetail}
            />
            <Stack.Screen name="ShowKPIDetail" component={ShowKPIDetail} />
            {/* Send Performance Review */}
            <Stack.Screen name="SendReview" component={SendReview} />
            {/* eSignature */}
            <Stack.Screen name="SignPdf" component={SignPdf} />
            <Stack.Screen name="ESignature" component={ESignature} />
            {/* eSignature Dashboard */}
            <Stack.Screen
              name="ESignatureDashboard"
              component={ESignatureDashboard}
            />
            <Stack.Screen name="NewSignature" component={NewSignature} />
            <Stack.Screen name="AllDocuments" component={AllDocuments} />
            {/* Pending eSignature Documents */}
            <Stack.Screen name="PendingDocs" component={PendingDoc} />
            <Stack.Screen
              name="PendingDocsDetail"
              component={PendingDocsDetail}
            />
            <Stack.Screen
              name="EditPendongESignature"
              component={EditPendongESignature}
            />
            {/* Signed eSignature Docs */}
            <Stack.Screen name="SignedDocs" component={SignedDocs} />
            <Stack.Screen
              name="SignedDocsDetail"
              component={SignedDocsDetail}
            />
            {/* Module Pending Docs */}
            <Stack.Screen
              name="ModulePendingDoc"
              component={ModulePendingDoc}
            />
            <Stack.Screen
              name="ModulePendingDocsDetail"
              component={ModulePendingDocsDetail}
            />
            {/* Module Signed Docs */}
            <Stack.Screen name="ModuleSinedDoc" component={ModuleSinedDoc} />
            <Stack.Screen
              name="ModuleSignedDocDetail"
              component={ModuleSignedDocDetail}
            />
            {/* HR Budget Dashboard */}
            <Stack.Screen
              name="HRBudgetDashboard"
              component={HRBudgetDashboard}
            />
            <Stack.Screen name="HRBudgetEmployees" component={EmployeeInfo} />
            {/* HR Budget Planning */}
            <Stack.Screen name="Planning" component={Planning} />
            <Stack.Screen name="PlanningDetail" component={PlanningDetail} />
            <Stack.Screen name="AddPlanning" component={AddPlanning} />
            {/* HR Budget */}
            <Stack.Screen name="Budget" component={Budget} />
            <Stack.Screen name="BudgetDetail" component={BudgetDetail} />
            <Stack.Screen name="AddBudget" component={AddBudget} />
            {/* Open Positions */}
            <Stack.Screen name="OpenPosition" component={OpenPosition} />
            <Stack.Screen
              name="OpenPositionDetail"
              component={OpenPositionDetail}
            />
            <Stack.Screen name="AddOpenPosition" component={AddOpenPosition} />
            {/* Scheduler */}
            <Stack.Screen name="Scheduler" component={Scheduler} />
            <Stack.Screen name="AddScheduler" component={AddScheduler} />
            <Stack.Screen name="SwapShift" component={SwapShift} />
            {/* Indoor Tracking */}
            <Stack.Screen name="IndoorTracking" component={IndoorTracking} />
            <Stack.Screen
              name="IndoorTrackingHistory"
              component={IndoorTrackingHistory}
            />
            {/* Settings */}
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Theme" component={SelectTheme} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="eSignature" component={eSignature} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
            <Stack.Screen name="Documents" component={Documents} />
            {/* About */}
            <Stack.Screen name="About" component={About} />
            {/* Developer Options */}
            <Stack.Screen name="Developer" component={Developer} />
            <Stack.Screen name="ViewUserData" component={ViewUserData} />
            <Stack.Screen
              name="ViewNotificationTokens"
              component={ViewNotificationTokens}
            />
            <Stack.Screen
              name="LanguageMissingWords"
              component={LanguageMissingWords}
            />
            {/* Chat */}
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Call" component={Call} />
            <Stack.Screen name="AllEmployeesList" component={EmployeesList} />
            {/* Calendar */}
            <Stack.Screen name="AddEvent" component={AddEvent} />
            <Stack.Screen name="AddMeeting" component={AddMeeting} />

            {/* QuickAccess */}
            <Stack.Screen
              name="QuickAccessOptions"
              component={QuickAccessOptions}
            />

            {/* Acknowledgement */}
            <Stack.Screen name="Acknowledgement" component={Acknowledgement} />
            {/* Approvals */}
            <Stack.Screen name="ApprovalList" component={ApprovalList} />
          </Stack.Navigator>
        </PerformanceProvider>
      </ExpenseProvider>
    </RecruitmentProvider>
  );
};
import { useNavigation } from "@react-navigation/native";
import { log } from "@webhr/common";
import { Screen, Toast } from "@webhr/components";
import { translate } from "@webhr/lang";
import React, { useEffect, useState } from "react";
import NewGrid from "../../../components/NewGrid";
import { getEmployeFormRoles } from "../../../helpers/RolesHelper";
import useApi from "../../../hooks/useApi";

const EmployeeForm = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [gridData, setGridData] = useState([]);
  const [shouldLoadMore, setShouldLoadMore] = useState(true);
  const [stopSearchLoading, setStopLoading] = useState(false);
  const [recordId, setRecordId] = useState(0);
  const [canEdit, setEditRole] = useState(false);
  const [canDelete, setDeleteRole] = useState(false);
  const [canCancel, setCanCancel] = useState(false);

  const { cancelRecord, deleteRecord, getModuleData } = useApi();

  const navigation = useNavigation();

  const transformData = (data) => {
    let arr = [];
    data?.Results?.map((item) => {
      arr.push({
        FieldId: item[0],
        Values: item,
      });
    });

    return arr;
  };

  const getData = async (pageNumber, shouldReplace) => {
    let loadMore = false;
    try {
      let res = await getModuleData(
        "Modules_Forms_EmployeeForms",
        searchText,
        pageNumber
      );
      let data = JSON.parse(res);
      log("getData of Forms: ", data);
      if (data.Results != null && data.Results.length >= 20) {
        loadMore = true;
      }

      if (data?.Results != null) {
        let transformed = transformData(data);
        let arr = [];
        if (shouldReplace) {
          arr = transformed;
          setStopLoading(true);
        } else {
          arr = [...gridData, ...transformed];
        }

        //Role check
        let roles = getEmployeFormRoles();
        if (roles) {
          setCanCancel(roles[9] == "1");
        }

        setGridData(arr);
        setLoading(false);
        setShouldLoadMore(loadMore);
      } else {
        Toast.warning(translate("Record not found!"));
        return;
      }
    } catch (error) {
      log("Error in getData of Forms: ", error);
      Toast.error(translate("Something went wrong"));
    }
  };

  useEffect(() => {
    getData(page, false);
  }, []);

  const onSuccess = (msg) => {
    Toast.success(translate(msg));
    setLoading(true);
    getData(page, true);
  };

  const onDeleteSuccess = () => {
    Toast.success(translate("Record deleted successfully!"));
    getData(page, true);
  };
  const onCancelSuccess = () => {
    Toast.success(translate("Your request has been cancelled..."));
    getData(page, true);
  };

  const onAddPress = () => {
    navigation.navigate("AddEmployeeForm", {
      onSuccess,
      ac: "AddNewRecord",
      m: "Modules_Forms_EmployeeForms",
      sm: "EmployeeForms",
      mn: "Employee Forms",
      id: recordId,
    });
  };

  const onOptionMenuPress = (id) => {
    setRecordId(id);
  };

  const navigateToEdit = () => {
    navigation.navigate("EmployeeFormDetails", {
      onSuccess,
      ac: "EditRecord",
      m: "Modules_Forms_EmployeeForms",
      sm: "EmployeeForms",
      mn: "Employee Forms",
      id: recordId,
    });
  };

  const onDocumentsPress = () => {
    navigation.navigate("Documents", {
      module: "Modules_Forms",
      subModule: "Employee Forms",
      id: recordId,
    });
  };
  const onDiscussionsPress = () => {
    navigation.navigate("Discussions", {
      module: "Modules_Forms_EmployeeForms",
      subModule: "EmployeeForms",
      id: recordId,
    });
  };

  const onDeletePress = async () => {
    setLoading(true);
    try {
      let res = await deleteRecord("Modules_Forms_EmployeeForms", recordId);
      if (res == "1") {
        onDeleteSuccess();
        setRecordId(0);
      } else {
        setLoading(false);
        Toast.error(translate("Failed!"), "danger");
      }
    } catch (error) {
      log("Forms Delete Error: ", error);
      Toast.error(translate("Something went wrong"), "danger");
      setLoading(false);
    }
  };
  const onCancelPress = async (comment) => {
    setLoading(true);
    try {
      let res = await cancelRecord(
        "Modules_Forms_EmployeeForms",
        recordId,
        comment
      );
      let response = JSON.parse(res);
      if (response.Status == "1") {
        setRecordId(0);
        onCancelSuccess();
      } else {
        setLoading(false);
        Toast.error(translate(response.Message), "danger");
      }
    } catch (error) {
      log("Forms Delete Error: ", error);
      Toast.error(translate("Something went wrong"), "danger");
      setLoading(false);
    }
  };

  const onPress = (id) => {
    let obj = {};
    gridData.map((item) => {
      if (item?.FieldId == id) {
        obj = item?.Values;
      }
    });
    navigation.navigate("EmployeeFormDetails", { id, obj });
  };

  const getMoreData = async () => {
    let pg = page + 1;
    setPage(pg);
    await getData(pg, false);
  };
  const getSearchedData = async () => {
    await getData(page, true);
  };

  const onSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <Screen title={translate("Employee Forms")} loading={loading}>
      <NewGrid
        data={gridData}
        showAddButton={false}
        onAddPress={onAddPress}
        showOptionMenu={true}
        showCancel={canCancel}
        onOptionMenuPress={onOptionMenuPress}
        onEditPress={navigateToEdit}
        onDocumentsPress={onDocumentsPress}
        onDeletePress={onDeletePress}
        onCancelPress={onCancelPress}
        onPress={onPress}
        icon={"user"}
        headingIndex={3}
        subHeadingIndexes={[2]}
        normalTextIndexes={[5]}
        approvalIndex={10}
        shouldLoadMore={shouldLoadMore}
        getMoreData={getMoreData}
        getSearchedData={getSearchedData}
        onSearchTextChange={onSearchTextChange}
        stopSearch={stopSearchLoading}
        canDelete={canDelete}
        canEdit={canEdit}
        searchModule={translate("Forms")}
        onDiscussionsPress={onDiscussionsPress}
      />
    </Screen>
  );
};

export default AppNavigator;
