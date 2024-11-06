"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[973,2169],{308548:(e,a,o)=>{o.d(a,{Z:()=>s});let s=e=>Array.from(e)[0].toUpperCase()+Array.from(e).slice(1).join("")},702169:(e,a,o)=>{o.d(a,{sO:()=>n,Dw:()=>u,HL:()=>r,nC:()=>i,MC:()=>M,nU:()=>O,jn:()=>c,vg:()=>D,dd:()=>L,Sx:()=>R,Dl:()=>I,Un:()=>m,KJ:()=>y});var s=o(667294),l=o(616550),E=o(342513),d=o(741983),t=o(340523);let A={payload:{},type:null},_={businessId:"",business:null,managerId:"",manager:null,businessHierarchyId:"",businessHierarchy:null,detailId:"",profile:null,adAccount:null,isActingUserReseller:null,partnerId:"",employeeId:"",intents:A,modal:{modalType:null}};function p(e=_,a){switch(a.type){case"SET_ROUTER_PARAMS":return{...e,businessId:a.payload.businessId??"",detailId:a.payload.detailId??""};case"SET_SELECTED_BUSINESS":return{...e,businessId:a.payload.business?.user.id??"",business:a.payload.business};case"SET_CEE_MIGRATION_INFO":return{...e,ceeMigrationInfo:a.payload.ceeMigrationInfo};case"SET_SELECTED_BUSINESS_HIERARCHY":return{...e,businessHierarchyId:a.payload.businessHierarchy?.id||"",businessHierarchy:a.payload.businessHierarchy};case"SET_SELECTED_ORGANIZATION_MANAGER":return{...e,managerId:a.payload.manager?.user.id??"",manager:a.payload.manager};case"SET_SELECTED_DETAIL":return{...e,detailId:a.payload.detailId??""};case"SET_SELECTED_PROFILE":return{...e,profile:a.payload.profile};case"SET_SELECTED_AD_ACCOUNT":return{...e,adAccount:a.payload.adAccount};case"SET_SELECTED_PARTNER_ID":return{...e,partnerId:a.payload.partnerId};case"SET_SELECTED_EMPLOYEE_ID":return{...e,employeeId:a.payload.employeeId};case"SET_IS_ACTING_USER_RESELLER":return{...e,isActingUserReseller:a.payload.isActingUserReseller};case"CLEAR_INTENT":case"OPEN_SHEET":return{...e,intents:function(e,a){switch(a.type){case"CLEAR_INTENT":return A;case"OPEN_SHEET":let{type:o,payload:s}=a;return{type:o,payload:s};default:return e}}(e.intents,a)};case"SET_MODAL":case"CLEAR_MODAL":return{...e,modal:function(e,a){switch(a.type){case"SET_MODAL":return a.payload;case"CLEAR_MODAL":return{modalType:null};default:return e}}(e.modal,a)};default:return e}}var T=o(785893);let{Provider:S,useHook:r}=(0,E.Z)("BusinessAccess");function n({children:e}){let[a,o]=(0,s.useReducer)(p,_),l=(0,s.useMemo)(()=>({setRouterParams:({detailId:e,businessId:a})=>o({type:"SET_ROUTER_PARAMS",payload:{detailId:e,businessId:a}}),setSelectedBusiness:e=>o({type:"SET_SELECTED_BUSINESS",payload:{business:e}}),setCeeMigrationInfo:e=>o({type:"SET_CEE_MIGRATION_INFO",payload:{ceeMigrationInfo:e}}),setSelectedOrganizationManager:e=>o({type:"SET_SELECTED_ORGANIZATION_MANAGER",payload:{manager:e}}),setSelectedBusinessHierarchy:e=>o({type:"SET_SELECTED_BUSINESS_HIERARCHY",payload:{businessHierarchy:e}}),setSelectedDetail:({detailId:e})=>o({type:"SET_SELECTED_DETAIL",payload:{detailId:e}}),setSelectedProfile:e=>o({type:"SET_SELECTED_PROFILE",payload:{profile:e}}),setSelectedAdAccount:e=>o({type:"SET_SELECTED_AD_ACCOUNT",payload:{adAccount:e}}),setSelectedPartnerId:e=>o({type:"SET_SELECTED_PARTNER_ID",payload:{partnerId:e??""}}),setSelectedEmployeeId:e=>o({type:"SET_SELECTED_EMPLOYEE_ID",payload:{employeeId:e??""}}),setIsActingUserReseller:e=>o({type:"SET_IS_ACTING_USER_RESELLER",payload:{isActingUserReseller:e??!1}}),clearIntent:()=>o({type:"CLEAR_INTENT"}),openSheet:e=>o({type:"OPEN_SHEET",payload:e}),setAddPeopleModal:()=>o({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE"}}),setAddPeopleInviteConfirmationModal:({inviteIds:e,role:a,isPendingTabActive:s})=>o({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE_INVITE_CONFIRMATION",modalProps:{inviteIds:e,role:a,isPendingTabActive:s}}}),setAddPeopleInviteWithAssetsConfirmationModal:({inviteIds:e,invitedPeopleIdentifiers:a})=>o({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE_INVITE_WITH_ASSETS_CONFIRMATION",modalProps:{inviteIds:e,invitedPeopleIdentifiers:a}}}),setAddPartnerInviteConfirmationModal:({selectedId:e,role:a,inviteId:s,isReseller:l})=>o({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_INVITE_CONFIRMATION",modalProps:{selectedId:e,role:a,inviteId:s,isReseller:l}}}),setRemovePersonModal:e=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_PERSON",modalProps:e}}),setRemoveProfilePermissionsModal:({userData:e,selectionType:a,profileId:s,profileName:l,dataToRefresh:E,refreshData:d})=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_PROFILE_PERMISSIONS",modalProps:{userData:e,selectionType:a,profileId:s,profileName:l,dataToRefresh:E,refreshData:d}}}),setEditPersonRoleModal:e=>o({type:"SET_MODAL",payload:{modalType:"EDIT_PERSON_ROLE",modalProps:e}}),setInviteRequestPartnerModal:e=>o({type:"SET_MODAL",payload:{modalType:"INVITE_REQUEST_PARTNER",modalProps:{partnershipType:e?.partnershipType,pageForLogger:e?.pageForLogger}}}),setRequestPartnerConfirmationModal:({partnerId:e,role:a,requestId:s})=>o({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_REQUEST_CONFIRMATION",modalProps:{partnerId:e,role:a,requestId:s}}}),setRequestPartnerConfirmationSuccessModal:({requestId:e})=>o({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_REQUEST_CONFIRMATION_SUCCESS",modalProps:{requestId:e}}}),setRemoveChildBusinessModal:()=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_CHILD_BUSINESS"}}),setRemoveOrganizationManagerModal:()=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_ORGANIZATION_MANAGER"}}),setRemovePartnerModal:e=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_PARTNER",modalProps:{...e}}}),setRemoveSharedPartnerModal:e=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_SHARED_PARTNER",modalProps:{...e}}}),setRemoveSharedAdAccountModal:e=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_SHARED_AD_ACCOUNT",modalProps:{...e}}}),setCreateAdAccountModal:()=>o({type:"SET_MODAL",payload:{modalType:"CREATE_AD_ACCOUNT"}}),setCreateAdAccountConfirmationModal:({ownerInfo:e,accountInfo:a,refreshData:s})=>o({type:"SET_MODAL",payload:{modalType:"CREATE_AD_ACCOUNT_CONFIRMATION",modalProps:{accountInfo:a,ownerInfo:e,refreshData:s}}}),setAssignAdAccountsModal:({selectedIds:e,selectionType:a,dataToRefresh:s,assignmentType:l,inviteIds:E,peopleIdentifiers:d,roleType:t,showProfiles:A,resellerUserId:_})=>o({type:"SET_MODAL",payload:{modalType:"ASSIGN_AD_ACCOUNTS",modalProps:{selectedIds:e,selectionType:a,dataToRefresh:s,assignmentType:l,peopleIdentifiers:d,inviteIds:E,roleType:t,showProfiles:A,resellerUserId:_}}}),setRequestAdAccountsModal:({requestId:e,partnerId:a})=>o({type:"SET_MODAL",payload:{modalType:"REQUEST_AD_ACCOUNTS",modalProps:{requestId:e,partnerId:a}}}),setRequestAdAccountsGeneralModal:({partner:e,adAccountsRequested:a})=>o({type:"SET_MODAL",payload:{modalType:"REQUEST_AD_ACCOUNTS_GENERAL",modalProps:{partner:e,adAccountsRequested:a}}}),setEditAdAccountAccessModal:({resourceId:e,principalId:a,dataToRefresh:s,assignmentType:l,rolesForAoaa:E,clientBusinessId:d})=>o({type:"SET_MODAL",payload:{modalType:"EDIT_AD_ACCOUNT_ACCESS",modalProps:{resourceId:e,principalId:a,dataToRefresh:s,assignmentType:l,rolesForAoaa:E,clientBusinessId:d}}}),setRemoveAdAccountAccessModal:({resourceId:e,principalId:a,dataToRefresh:s,assignmentType:l,resourceType:E})=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_AD_ACCOUNT_ACCESS",modalProps:{resourceId:e,principalId:a,dataToRefresh:s,assignmentType:l,resourceType:E}}}),setOnboardingModal:({onComplete:e,onDismiss:a})=>o({type:"SET_MODAL",payload:{modalType:"ONBOARDING",modalProps:{onComplete:e,onDismiss:a}}}),setSwitchAdAccountModal:({id:e,name:a,owner_user_id:s,merchant_id:l})=>o({type:"SET_MODAL",payload:{modalType:"SWITCH_AD_ACCOUNT",modalProps:{id:e,name:a,owner_user_id:s,merchant_id:l}}}),setAssignProfilesModal:({selectedIds:e,selectionType:a,dataToRefresh:s,assignmentType:l,refreshData:E})=>o({type:"SET_MODAL",payload:{modalType:"ASSIGN_PROFILES",modalProps:{selectedIds:e,selectionType:a,dataToRefresh:s,assignmentType:l,refreshData:E}}}),setAssignAssetsModal:({selectedIds:e,inviteId:a,dataToRefresh:s})=>o({type:"SET_MODAL",payload:{modalType:"ASSIGN_ASSETS",modalProps:{selectedIds:e,inviteId:a,dataToRefresh:s}}}),setRequestProfileAccessModal:({requestId:e,requesteeId:a,profilePermissions:s})=>o({type:"SET_MODAL",payload:{modalType:"REQUEST_PROFILE_ACCESS",modalProps:{requestId:e,requesteeId:a,profilePermissions:s}}}),setRequestCatalogAccessModal:({requestId:e})=>o({type:"SET_MODAL",payload:{modalType:"REQUEST_CATALOG_ACCESS",modalProps:{requestId:e}}}),setRequestProfileAccessGeneralModal:()=>o({type:"SET_MODAL",payload:{modalType:"REQUEST_PROFILE_ACCESS_GENERAL"}}),setAssetGroupsFormModal:e=>o({type:"SET_MODAL",payload:{modalType:"ASSET_GROUPS_FORM",modalProps:e}}),setShareTagModal:e=>o({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_FORM",modalProps:e}}),setShareTagSummaryModal:e=>o({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_SUMMARY_FORM",modalProps:e}}),setShareTagLegalModal:e=>o({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_LEGAL_FORM",modalProps:e}}),setTagGetStartedModal:e=>o({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_GET_STARTED_FORM",modalProps:e}}),setDeleteAssetGroupConfirmationModal:e=>o({type:"SET_MODAL",payload:{modalType:"DELETE_ASSET_GROUP_CONFIRMATION",modalProps:e}}),setAOAAPermissionAssignmentModal:({partnerBusinessInfo:e,ownerInfo:a,accountInfo:s})=>o({type:"SET_MODAL",payload:{modalType:"AOAA_PERMISSION_ASSIGNMENT",modalProps:{partnerBusinessInfo:e,ownerInfo:a,accountInfo:s}}}),setUnsavedPermissionsConfirmationModal:({partnerBusinessInfo:e,ownerInfo:a,accountInfo:s})=>o({type:"SET_MODAL",payload:{modalType:"UNSAVED_PERMISSIONS_CONFIRMATION",modalProps:{partnerBusinessInfo:e,ownerInfo:a,accountInfo:s}}}),setAOAARequestCreationSuccessModal:({partnerBusinessInfo:e,ownerInfo:a,businessIdToPermissions:s})=>o({type:"SET_MODAL",payload:{modalType:"AOAA_REQUEST_CREATION_SUCCESS",modalProps:{partnerBusinessInfo:e,ownerInfo:a,businessIdToPermissions:s}}}),setAddAssetOrUserToAssetGroup:({assetOrMemberType:e,assetGroupInfo:a})=>o({type:"SET_MODAL",payload:{modalType:"ADD_ASSET_OR_USER_TO_ASSET_GROUP",modalProps:{assetOrMemberType:e,assetGroupInfo:a}}}),setAddUserToAssetGroupConfirmation:e=>o({type:"SET_MODAL",payload:{modalType:"ADD_USER_TO_ASSET_GROUP_CONFIRMATION",modalProps:e}}),setRemoveAssetOrUserFromAssetGroup:({assetOrMemberType:e,toRemove:a})=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_ASSET_OR_USER_TO_ASSET_GROUP",modalProps:{assetOrMemberType:e,toRemove:a}}}),setRemoveAssetFromTag:({assetOrMemberType:e,toRemove:a})=>o({type:"SET_MODAL",payload:{modalType:"REMOVE_ASSET_FROM_TAG",modalProps:{assetOrMemberType:e,toRemove:a}}}),setAddOrganizationManagersModal:e=>o({type:"SET_MODAL",payload:{modalType:"ADD_ORGANIZATION_MANAGERS",modalProps:{...e}}}),setAddOrganizationManagersConfirmationModal:e=>o({type:"SET_MODAL",payload:{modalType:"ADD_ORGANIZATION_MANAGERS_CONFIRMATION",modalProps:{...e}}}),setEditBusinessDetailsModal:e=>o({type:"SET_MODAL",payload:{modalType:"EDIT_BUSINESS_DETAILS",modalProps:e}}),setViewBusinessDetailsModal:e=>o({type:"SET_MODAL",payload:{modalType:"VIEW_BUSINESS_DETAILS",modalProps:e}}),setAddChildBusinessesModal:e=>o({type:"SET_MODAL",payload:{modalType:"ADD_CHILD_BUSINESSES",modalProps:{...e}}}),setAddChildBusinessesConfirmationModal:e=>o({type:"SET_MODAL",payload:{modalType:"ADD_CHILD_BUSINESSES_CONFIRMATION",modalProps:e}}),setSelectAdAccountToShareFromModal:()=>o({type:"SET_MODAL",payload:{modalType:"SELECT_AD_ACCOUNT_TO_SHARE_FROM"}}),setAddAdAccountModal:()=>o({type:"SET_MODAL",payload:{modalType:"ADD_AD_ACCOUNT"}}),setRequiredRMAAInformationModal:e=>o({type:"SET_MODAL",payload:{modalType:"ADD_REQUIRED_RMAA_INFORMATION",modalProps:e}}),setRMAAUncompleteModal:e=>o({type:"SET_MODAL",payload:{modalType:"RMAA_UNCOMPLETE_MODAL",modalProps:e}}),setSavedRMAAInformationSuccessModal:e=>o({type:"SET_MODAL",payload:{modalType:"SAVED_RMAA_INFORMATION_SUCCESS",modalProps:e}}),setConfirmAssetAccessRequestModal:e=>o({type:"SET_MODAL",payload:{modalType:"CONFIRM_ASSET_ACCESS_REQUEST",modalProps:e}}),setCreateBusinessHierarchyModal:e=>{o({type:"SET_MODAL",payload:{modalType:"CREATE_BUSINESS_HIERARCHY",modalProps:e}})},setAssignCatalogModal:e=>{o({type:"SET_MODAL",payload:{modalType:"ASSIGN_CATALOG",modalProps:{...e}}})},setRemoveDefaultUtmsConfirmation:e=>{o({type:"SET_MODAL",payload:{modalType:"REMOVE_DEFAULT_UTMS_CONFIRMATION",modalProps:{...e}}})},setCeeMigrationBusinessInformationModal:e=>{o({type:"SET_MODAL",payload:{modalType:"CEE_MIGRATION_BUSINESS_INFORMATION_MODAL",modalProps:e}})},setResellerInviteSentSuccessfulModal:e=>{o({type:"SET_MODAL",payload:{modalType:"RESELLER_INVITE_SENT_SUCCESSFUL_MODAL",modalProps:e}})},setResellerInviteAcceptedSuccessfulModal:e=>{o({type:"SET_MODAL",payload:{modalType:"RESELLER_INVITE_ACCEPTED_SUCCESSFUL_MODAL",modalProps:e}})},setAddCatalogModal:()=>{o({type:"SET_MODAL",payload:{modalType:"ADD_CATALOG"}})},setRequestCatalogsGeneralModal:e=>{o({type:"SET_MODAL",payload:{modalType:"REQUEST_CATALOGS_GENERAL",modalProps:{...e}}})},setRequestCatalogsModal:e=>{o({type:"SET_MODAL",payload:{modalType:"REQUEST_CATALOGS",modalProps:{...e}}})},clearModal:()=>o({type:"CLEAR_MODAL"})}),[]),E=(0,s.useMemo)(()=>({businessAccess:a,...l}),[a,l]);return(0,T.jsx)(S,{value:E,children:e})}function y(e=!1){let{checkExperiment:a}=(0,t.F)(),o=(0,l.TH)(),{anyEnabled:s}=a("web_business_access_table_reload_fix"),{anyEnabled:E}=a("web_m10n_business_hierarchy_beta"),{businessAccess:{businessId:A}}=r(),{params:{userBizId:_}}=(0,l.$B)();return E&&e&&(0,d.dK)(o)?A:s?_??"":A}function O(e=!1){let{checkExperiment:a}=(0,t.F)(),o=(0,l.TH)(),{anyEnabled:s}=a("web_business_access_table_reload_fix"),{anyEnabled:E}=a("web_m10n_business_hierarchy_beta"),{businessAccess:{detailId:A}}=r(),{params:{detailId:_}}=(0,l.$B)();return E&&e&&(0,d.dK)(o)?A:s?_??"":A}function M(){let{checkExperiment:e}=(0,t.F)(),{anyEnabled:a}=e("web_m10n_business_hierarchy_beta"),{businessAccess:{business:o}}=r();return a?o:null}function i(){let{businessAccess:{businessHierarchy:e}}=r();return e}function R(){let{checkExperiment:e}=(0,t.F)(),{anyEnabled:a}=e("web_m10n_business_hierarchy_beta"),{businessAccess:{manager:o}}=r();return a?o:null}function m(){let{checkExperiment:e}=(0,t.F)(),{anyEnabled:a}=e("web_m10n_business_hierarchy_beta"),{businessAccess:{profile:o}}=r();return a?o:null}function u(){let{checkExperiment:e}=(0,t.F)(),{anyEnabled:a}=e("web_m10n_business_hierarchy_beta"),{businessAccess:{adAccount:o}}=r();return a?o:null}function I(){let{businessAccess:{partnerId:e}}=r();return e}function c(){let{checkExperiment:e}=(0,t.F)(),{anyEnabled:a}=e("web_m10n_business_hierarchy_beta"),{businessAccess:{employeeId:o}}=r();return a?o:""}function D(){let{businessAccess:{intents:e}}=r();return e}function L(){let{businessAccess:{modal:e}}=r();return e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/973-fb5a9320a99f17b9.mjs.map