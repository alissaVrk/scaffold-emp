import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Account = {
  __typename?: 'Account';
  /** An array of key-value pairs that represent the account attributes */
  accountAttributes: Array<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  id: Scalars['ID'];
  membership?: Maybe<Membership>;
  users: Array<AccountUser>;
};

export type AccountHydration = {
  __typename?: 'AccountHydration';
  email?: Maybe<Scalars['String']>;
  flow: Scalars['String'];
  invitation?: Maybe<InvitationHydrationData>;
  name?: Maybe<Scalars['String']>;
  partner?: Maybe<PartnerHydrationData>;
  subjectPassingDate?: Maybe<Scalars['DateTime']>;
  subjectState?: Maybe<Scalars['String']>;
  userIsExecutor?: Maybe<Scalars['String']>;
  userJourney?: Maybe<Scalars['String']>;
  userRelationship?: Maybe<Scalars['String']>;
};

export type AccountPartner = {
  __typename?: 'AccountPartner';
  partnerAnnotations: PartnerAnnotations;
  partnerLogoUrl?: Maybe<Scalars['String']>;
  partnerName: Scalars['String'];
  partnerSplashLogoUrl: Scalars['String'];
  splashText?: Maybe<Scalars['String']>;
};

export type AccountUser = {
  __typename?: 'AccountUser';
  account: Account;
  createdAt: Scalars['DateTime'];
  userId: Scalars['ID'];
};

/** Entities associated with activity items. */
export enum ActivityEntityType {
  Document = 'DOCUMENT',
  Guide = 'GUIDE',
  Path = 'PATH',
  Step = 'STEP'
}

export type ActivityItem = {
  __typename?: 'ActivityItem';
  account: Account;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  entitySlug?: Maybe<Scalars['String']>;
  entityType?: Maybe<ActivityEntityType>;
  id: Scalars['ID'];
  type: ActivityType;
  user: User;
};

/** Activity Item types. */
export enum ActivityType {
  AccountUpgraded = 'ACCOUNT_UPGRADED',
  DocumentDeleted = 'DOCUMENT_DELETED',
  DocumentUploaded = 'DOCUMENT_UPLOADED',
  GuideBookmarked = 'GUIDE_BOOKMARKED',
  NewPathStarted = 'NEW_PATH_STARTED',
  StepAssigned = 'STEP_ASSIGNED',
  StepDone = 'STEP_DONE',
  StepNotDone = 'STEP_NOT_DONE',
  StepPinned = 'STEP_PINNED',
  StepReminderRemoved = 'STEP_REMINDER_REMOVED',
  StepReminderSet = 'STEP_REMINDER_SET',
  StepUnassigned = 'STEP_UNASSIGNED',
  StepUnpinned = 'STEP_UNPINNED',
  UserJoinedAccount = 'USER_JOINED_ACCOUNT'
}

export type AssignedStepTarget = {
  __typename?: 'AssignedStepTarget';
  targetId?: Maybe<Scalars['String']>;
  type: StepAssignedTargetType;
  viewIdentifier: Scalars['String'];
};

export type AssistanceRequest = {
  __typename?: 'AssistanceRequest';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  documents: Array<AssistanceRequestDocument>;
  entries: Array<AssistanceRequestEntry>;
  id: Scalars['ID'];
  status: AssistanceRequestStatus;
  updatedAt: Scalars['DateTime'];
  vendor: AssistanceRequestVendor;
};

export type AssistanceRequestAppendix = AssistanceRequestDocument | AssistanceRequestEntry;

export type AssistanceRequestAppendixInput = {
  appendixId?: InputMaybe<Scalars['ID']>;
  assistanceRequestId: Scalars['ID'];
  entryValue?: InputMaybe<Scalars['String']>;
  requirementId: Scalars['ID'];
  vaultDocumentId?: InputMaybe<Scalars['ID']>;
};

export type AssistanceRequestDocument = {
  __typename?: 'AssistanceRequestDocument';
  createdAt: Scalars['DateTime'];
  documentUrls: Array<Scalars['String']>;
  id: Scalars['ID'];
  request: AssistanceRequest;
  requirement: AssistanceRequestVendorRequirement;
  updatedAt: Scalars['DateTime'];
  vaultDocument?: Maybe<Document>;
};

export type AssistanceRequestEntry = {
  __typename?: 'AssistanceRequestEntry';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  request: AssistanceRequest;
  requirement: AssistanceRequestVendorRequirement;
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

/** Status of an Assistance Request. */
export enum AssistanceRequestStatus {
  Deleted = 'Deleted',
  Done = 'Done',
  Draft = 'Draft',
  Failed = 'Failed',
  InProgress = 'InProgress',
  InReview = 'InReview',
  MissingInfo = 'MissingInfo'
}

export type AssistanceRequestVendor = {
  __typename?: 'AssistanceRequestVendor';
  category: AssistanceRequestVendorCategory;
  contentfulBusinessSlug: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  requirements: Array<AssistanceRequestVendorRequirement>;
  updatedAt: Scalars['DateTime'];
};

export type AssistanceRequestVendorCategory = {
  __typename?: 'AssistanceRequestVendorCategory';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  vendors: Array<AssistanceRequestVendor>;
};

export type AssistanceRequestVendorRequirement = {
  __typename?: 'AssistanceRequestVendorRequirement';
  createdAt: Scalars['DateTime'];
  documentType?: Maybe<DocumentType>;
  enumOptions?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  isCommon: Scalars['Boolean'];
  isOptional: Scalars['Boolean'];
  name: Scalars['String'];
  type: AssistanceRequestVendorRequirementType;
  updatedAt: Scalars['DateTime'];
  vendor: AssistanceRequestVendor;
};

/** Type of data is needed to fulfill the requirement. */
export enum AssistanceRequestVendorRequirementType {
  Document = 'Document',
  Enum = 'Enum',
  Numeric = 'Numeric',
  PhoneNumber = 'PhoneNumber',
  String = 'String'
}

export type Block = {
  __typename?: 'Block';
  actionButtonText?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  entryPointIcon?: Maybe<Scalars['String']>;
  entryPointType?: Maybe<Scalars['String']>;
  icon?: Maybe<Image>;
  id: Scalars['ID'];
  isChecklist?: Maybe<Scalars['Boolean']>;
  isEmbedded?: Maybe<Scalars['Boolean']>;
  isExpendable?: Maybe<Scalars['Boolean']>;
  isPremiumFeature?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<ListItem>>;
  nativeIcon?: Maybe<Scalars['String']>;
  navigateTo?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Business = {
  __typename?: 'Business';
  assistanceRequestVendor?: Maybe<AssistanceRequestVendor>;
  businessIcon?: Maybe<Image>;
  businessInfoItems?: Maybe<Array<BusinessInfoItem>>;
  name: Scalars['String'];
  requiredDocuments?: Maybe<Scalars['JSON']>;
  requiredInfo?: Maybe<Scalars['JSON']>;
  requiredInformation?: Maybe<Scalars['JSON']>;
  slug: Scalars['String'];
  topDescription?: Maybe<Scalars['JSON']>;
};

export type BusinessInfoItem = {
  __typename?: 'BusinessInfoItem';
  labelOverride?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  value: Scalars['String'];
};

export type BusinessList = {
  __typename?: 'BusinessList';
  businessesArray: Array<Business>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Case = {
  __typename?: 'Case';
  data: Scalars['JSON'];
};

export type Document = {
  __typename?: 'Document';
  createdAt: Scalars['DateTime'];
  createdById: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  pages: Array<DocumentPage>;
  thumbnailUrl: Scalars['String'];
  toClose: Scalars['Boolean'];
  toFollowUp: Scalars['Boolean'];
  toPay: Scalars['Boolean'];
  toTransfer: Scalars['Boolean'];
  type: DocumentType;
  updatedAt: Scalars['DateTime'];
};

export type DocumentCategory = {
  __typename?: 'DocumentCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
  types: Array<DocumentType>;
};

export type DocumentPage = {
  __typename?: 'DocumentPage';
  document: Document;
  id: Scalars['ID'];
  pageNumber: Scalars['Int'];
  url: Scalars['String'];
};

export type DocumentType = {
  __typename?: 'DocumentType';
  category: DocumentCategory;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Feedback = {
  __typename?: 'Feedback';
  id: Scalars['ID'];
  scale: Scalars['String'];
  score: Scalars['String'];
  type: FeedbackType;
  user: User;
};

/** Type of Feedback. */
export enum FeedbackType {
  General = 'General',
  Obituary = 'Obituary'
}

export type Glossary = {
  __typename?: 'Glossary';
  definition?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type GriefChapter = {
  __typename?: 'GriefChapter';
  chapterId: Scalars['ID'];
  color: Scalars['String'];
  done: Scalars['Boolean'];
  durationSeconds: Scalars['Float'];
  seen: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type GriefHighlight = {
  __typename?: 'GriefHighlight';
  slug: Scalars['ID'];
  title: Scalars['String'];
};

export type GriefJournalEntry = {
  __typename?: 'GriefJournalEntry';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  emotions?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
};

/** The setting options for grief journal notifications */
export enum GriefJournalNotificationSetting {
  Afternoon = 'afternoon',
  Evening = 'evening',
  Morning = 'morning',
  Off = 'off'
}

export type Guide = {
  __typename?: 'Guide';
  audioUrl?: Maybe<Scalars['String']>;
  bookmarkedById?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  durationMinutes?: Maybe<Scalars['Float']>;
  durationSeconds?: Maybe<Scalars['Float']>;
  introText?: Maybe<Scalars['String']>;
  isBookmarked: Scalars['Boolean'];
  isHelpful?: Maybe<Scalars['Boolean']>;
  mainPathId?: Maybe<Scalars['String']>;
  recommendedPathId?: Maybe<Scalars['String']>;
  relativeURL?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  uri: Scalars['String'];
};

export type InfoEntryExplanation = {
  __typename?: 'InfoEntryExplanation';
  description: Scalars['String'];
  indicatorTitle: Scalars['String'];
  title: Scalars['String'];
};

export type IntroEntry = {
  caseKey?: Maybe<Scalars['String']>;
  displayCondition?: Maybe<Scalars['JSON']>;
  explanation?: Maybe<InfoEntryExplanation>;
  id: Scalars['ID'];
  type: Scalars['String'];
};

export type Invitation = {
  __typename?: 'Invitation';
  account: Account;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  invitedById: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type InvitationHydrationData = {
  __typename?: 'InvitationHydrationData';
  inviterName: Scalars['String'];
};

export type ListItem = {
  __typename?: 'ListItem';
  description?: Maybe<Scalars['JSON']>;
  emailAddress?: Maybe<Scalars['String']>;
  icon?: Maybe<Image>;
  isChecked?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  nativeIcon?: Maybe<Scalars['String']>;
  navigateTo?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type MeditationChapter = {
  __typename?: 'MeditationChapter';
  audioUrl: Scalars['String'];
  color: Scalars['String'];
  durationSeconds: Scalars['Float'];
  slug: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Membership = {
  __typename?: 'Membership';
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  offer: Offer;
  plan: Plan;
  purchasedSKU?: Maybe<Scalars['String']>;
  source: MembershipSourceType;
  startDate?: Maybe<Scalars['DateTime']>;
  status: MembershipStatusType;
  trialEndDate?: Maybe<Scalars['DateTime']>;
  trialStartDate?: Maybe<Scalars['DateTime']>;
};

/** Possible membership sources. */
export enum MembershipSourceType {
  Gratis = 'GRATIS',
  Organic = 'ORGANIC',
  Partner = 'PARTNER'
}

/** Possible membership status. */
export enum MembershipStatusType {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Limited = 'LIMITED',
  Trial = 'TRIAL'
}

export type Mutation = {
  __typename?: 'Mutation';
  activateMembership: Membership;
  addJournalEntry: GriefJournalEntry;
  assignStepToUser: Step;
  changePincode: Scalars['Boolean'];
  createAssistanceRequest: AssistanceRequest;
  createAssistanceRequestAppendix: AssistanceRequestAppendix;
  createAssistanceRequests: Array<AssistanceRequest>;
  createDocument: Document;
  createInvitations: Array<Invitation>;
  deleteAssistanceRequest: AssistanceRequest;
  deleteDocument: Document;
  deleteInvitation: Invitation;
  feedback: Feedback;
  pathDone: Path;
  pathReset: Path;
  pathStarted: Path;
  pathStepsUnhide: Path;
  pinStep: Step;
  setChecklistItem: ListItem;
  setGriefChapterDone: GriefChapter;
  setGriefChapterSeen: GriefChapter;
  setGuideBookmark: Guide;
  setGuideHelpful: Guide;
  setMyTags: MyUser;
  setupPincode: Scalars['Boolean'];
  signUp: Account;
  stepClearReminder: Step;
  stepDone: Step;
  stepHide: Step;
  stepRemind: Step;
  stepUndone: Step;
  stepUnhide: Step;
  submitAssistanceRequest: AssistanceRequest;
  submitObituary: Obituary;
  submitToolsRequest: ToolsRequest;
  unpinStep: Step;
  updateAccountCase: Case;
  updateAssistanceRequestDocuments: Array<AssistanceRequestDocument>;
  updateDocument: Document;
  updateJournalNotificationSetting: GriefJournalNotificationSetting;
  upsertObituaryEntries: Array<ObituaryEntry>;
};


export type MutationActivateMembershipArgs = {
  purchasedSKU?: InputMaybe<Scalars['String']>;
  receiptInput: ReceiptInput;
};


export type MutationAddJournalEntryArgs = {
  content?: InputMaybe<Scalars['String']>;
  emotions: Array<Scalars['String']>;
};


export type MutationAssignStepToUserArgs = {
  stepId: Scalars['String'];
  targetId?: InputMaybe<Scalars['String']>;
  targetType: StepAssignedTargetType;
};


export type MutationChangePincodeArgs = {
  newPincode: Scalars['String'];
  pincode: Scalars['String'];
  resetToken?: InputMaybe<Scalars['String']>;
};


export type MutationCreateAssistanceRequestArgs = {
  vendorId: Scalars['ID'];
};


export type MutationCreateAssistanceRequestAppendixArgs = {
  appendix: AssistanceRequestAppendixInput;
};


export type MutationCreateAssistanceRequestsArgs = {
  vendorIds: Array<Scalars['ID']>;
};


export type MutationCreateDocumentArgs = {
  newDocumentData: NewDocumentInput;
};


export type MutationCreateInvitationsArgs = {
  phoneNumbers: Array<Scalars['String']>;
};


export type MutationDeleteAssistanceRequestArgs = {
  requestId: Scalars['ID'];
};


export type MutationDeleteDocumentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteInvitationArgs = {
  id: Scalars['String'];
};


export type MutationFeedbackArgs = {
  canContact?: InputMaybe<Scalars['Boolean']>;
  scale: Scalars['String'];
  score: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<FeedbackType>;
};


export type MutationPathDoneArgs = {
  pathId: Scalars['String'];
};


export type MutationPathResetArgs = {
  pathId: Scalars['String'];
};


export type MutationPathStartedArgs = {
  caseData: Scalars['JSON'];
  pathId: Scalars['String'];
};


export type MutationPathStepsUnhideArgs = {
  pathId: Scalars['String'];
};


export type MutationPinStepArgs = {
  stepId: Scalars['String'];
};


export type MutationSetChecklistItemArgs = {
  isChecked: Scalars['Boolean'];
  key: Scalars['String'];
};


export type MutationSetGriefChapterDoneArgs = {
  chapterId: Scalars['String'];
};


export type MutationSetGriefChapterSeenArgs = {
  chapterId: Scalars['String'];
};


export type MutationSetGuideBookmarkArgs = {
  guideSlug: Scalars['String'];
  guideType: Scalars['String'];
  isBookmarked: Scalars['Boolean'];
};


export type MutationSetGuideHelpfulArgs = {
  guideSlug: Scalars['String'];
  guideType: Scalars['String'];
  isHelpful?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSetMyTagsArgs = {
  tags: Array<Scalars['String']>;
};


export type MutationSetupPincodeArgs = {
  pincode: Scalars['String'];
};


export type MutationSignUpArgs = {
  newAccountData: NewAccountInput;
  newUserData: NewUserInput;
  startMembership?: InputMaybe<Scalars['Boolean']>;
  supportedFeatures?: InputMaybe<SupportedFeatures>;
};


export type MutationStepClearReminderArgs = {
  stepId: Scalars['String'];
};


export type MutationStepDoneArgs = {
  stepId: Scalars['String'];
};


export type MutationStepHideArgs = {
  stepId: Scalars['String'];
};


export type MutationStepRemindArgs = {
  date: Scalars['DateTime'];
  stepId: Scalars['String'];
};


export type MutationStepUndoneArgs = {
  stepId: Scalars['String'];
};


export type MutationStepUnhideArgs = {
  stepId: Scalars['String'];
};


export type MutationSubmitAssistanceRequestArgs = {
  requestId: Scalars['ID'];
};


export type MutationSubmitObituaryArgs = {
  obituaryId: Scalars['String'];
};


export type MutationSubmitToolsRequestArgs = {
  contactType: ToolsRequestContactType;
  problems?: InputMaybe<Array<Scalars['String']>>;
  topic: Scalars['String'];
};


export type MutationUnpinStepArgs = {
  stepId: Scalars['String'];
};


export type MutationUpdateAccountCaseArgs = {
  caseData: Scalars['JSON'];
};


export type MutationUpdateAssistanceRequestDocumentsArgs = {
  requestIds: Array<Scalars['ID']>;
};


export type MutationUpdateDocumentArgs = {
  updateDocumentData: UpdateDocumentInput;
};


export type MutationUpdateJournalNotificationSettingArgs = {
  setting: GriefJournalNotificationSetting;
};


export type MutationUpsertObituaryEntriesArgs = {
  newObituaryEntries: Array<ObituaryEntryInput>;
};

export type MyCaseData = {
  __typename?: 'MyCaseData';
  SUBJECT_PASSING_DATE?: Maybe<Scalars['DateTime']>;
  SUBJECT_RESIDENCE_STATE_CODE?: Maybe<Scalars['String']>;
  USER_JOURNEY?: Maybe<Scalars['String']>;
  USER_RELATIONSHIP_TO_SUBJECT?: Maybe<Scalars['String']>;
};

export type MyUser = {
  __typename?: 'MyUser';
  email: Scalars['String'];
  id: Scalars['ID'];
  joinedAccountAt: Scalars['DateTime'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  removedFromAccountAt?: Maybe<Scalars['DateTime']>;
  tags: Array<Scalars['String']>;
};

export type NewAccountInput = {
  SUBJECT_PASSING_AGE?: InputMaybe<Scalars['Float']>;
  SUBJECT_PASSING_DATE?: InputMaybe<Scalars['DateTime']>;
  SUBJECT_RELIGION_AFFILIATION?: InputMaybe<Scalars['String']>;
  SUBJECT_RESIDENCE_STATE_CODE?: InputMaybe<Scalars['String']>;
  USER_IS_EXECUTOR?: InputMaybe<Scalars['String']>;
  USER_JOURNEY?: InputMaybe<Scalars['String']>;
  USER_ONBOARDING_NEEDS: Array<Scalars['String']>;
  USER_RELATIONSHIP_TO_SUBJECT: Scalars['String'];
};

export type NewDocumentInput = {
  name: Scalars['String'];
  pageUrls: Array<Scalars['String']>;
  toClose: Scalars['Boolean'];
  toFollowUp: Scalars['Boolean'];
  toPay: Scalars['Boolean'];
  toTransfer: Scalars['Boolean'];
  typeId: Scalars['ID'];
};

export type NewUserInput = {
  pincode: Scalars['String'];
  userEmail: Scalars['String'];
  userName: Scalars['String'];
};

export type Obituary = {
  __typename?: 'Obituary';
  account: Account;
  createdAt: Scalars['DateTime'];
  draftObituary?: Maybe<Scalars['String']>;
  entries?: Maybe<Array<ObituaryEntry>>;
  finalObituary?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  publicPdfUrl?: Maybe<Scalars['String']>;
  status: ObituaryStatus;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type ObituaryEntry = {
  __typename?: 'ObituaryEntry';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  obituary: Obituary;
  questionSlug: Scalars['String'];
  topicSlug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['String']>;
};

export type ObituaryEntryInput = {
  obituaryId: Scalars['String'];
  questionSlug: Scalars['String'];
  topicSlug: Scalars['String'];
  value: Scalars['String'];
};

export type ObituaryPage = {
  __typename?: 'ObituaryPage';
  questions: Array<ObituaryQuestion>;
};

export type ObituaryQuestion = {
  __typename?: 'ObituaryQuestion';
  inputType: ObituaryQuestionType;
  placeholder?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  value: Scalars['String'];
};

/** Type of question. */
export enum ObituaryQuestionType {
  Date = 'Date',
  Selection = 'Selection',
  TextLong = 'TextLong',
  TextShort = 'TextShort'
}

/** Status of an Obituary. */
export enum ObituaryStatus {
  Done = 'Done',
  Draft = 'Draft',
  InProgress = 'InProgress'
}

export type ObituaryTopic = {
  __typename?: 'ObituaryTopic';
  iconSlug: Scalars['String'];
  pages: Array<ObituaryPage>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type Offer = {
  __typename?: 'Offer';
  androidSKU?: Maybe<Scalars['String']>;
  androidSKUs?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  iosSKU?: Maybe<Scalars['String']>;
  iosSKUs?: Maybe<Array<Scalars['String']>>;
  offerType?: Maybe<OfferType>;
  trialDurationDays?: Maybe<Scalars['Float']>;
};

/** Offer type */
export enum OfferType {
  OneTime = 'ONE_TIME',
  Partner = 'PARTNER',
  Subscription = 'SUBSCRIPTION'
}

export type PartnerAnnotations = {
  __typename?: 'PartnerAnnotations';
  FUNERAL_DIRECTOR_DOMAIN?: Maybe<Array<Scalars['String']>>;
};

export type PartnerHydrationData = {
  __typename?: 'PartnerHydrationData';
  partnerLogoGrayscaleUrl: Scalars['String'];
  partnerLogoUrl: Scalars['String'];
  partnerText: Scalars['String'];
  slug: Scalars['String'];
};

export type Path = {
  __typename?: 'Path';
  avatar?: Maybe<Image>;
  blurb?: Maybe<Scalars['String']>;
  exploreGuides: Array<Guide>;
  guideCount: Scalars['Float'];
  guides: Array<Guide>;
  hasSteps: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  introAudioGuide?: Maybe<Guide>;
  /** @deprecated Removed */
  isRecommended: Scalars['Boolean'];
  missingIntroData: Scalars['Boolean'];
  name: Scalars['String'];
  /** @deprecated No more parking lot on Path */
  parkingLot?: Maybe<QuestionIntroEntry>;
  progress: Scalars['Float'];
  score: Scalars['Float'];
  slug: Scalars['String'];
  squareCover?: Maybe<Image>;
  status: Scalars['String'];
  steps: Array<Step>;
  stepsLeft: Scalars['Float'];
  timeFrame?: Maybe<Scalars['String']>;
  type: TopicType;
  /** @deprecated Removed */
  upcomingFallback: Scalars['Boolean'];
  upcomingPathPriority: Scalars['Float'];
};

export type Plan = {
  __typename?: 'Plan';
  currentOffer: Offer;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  accountHydration?: Maybe<AccountHydration>;
  accountPartner?: Maybe<AccountPartner>;
  activityItems: Array<ActivityItem>;
  allGlossaryItems: Array<Glossary>;
  allGriefChapters: Array<GriefChapter>;
  allGriefGuides: Array<Guide>;
  allMediationChapters: Array<MeditationChapter>;
  assistanceRequest: AssistanceRequest;
  assistanceRequestVendor: AssistanceRequestVendor;
  assistanceRequestVendorCategories: Array<AssistanceRequestVendorCategory>;
  assistanceRequestVendors: Array<AssistanceRequestVendor>;
  assistanceRequests: Array<AssistanceRequest>;
  bookmarkedGuideCount: Scalars['Float'];
  bookmarkedGuides: Array<Guide>;
  business: Business;
  businessList: BusinessList;
  caseDataForPathIntro: Case;
  caseDataForQuestions: Case;
  checklistSteps: Array<Step>;
  currentAccount?: Maybe<Account>;
  currentGriefChapter: GriefChapter;
  currentMembership?: Maybe<Membership>;
  currentTiming: StepTiming;
  /** @deprecated Replaced by 'currentAccount' */
  deduceCurrentAccount: Account;
  document: Document;
  documentCategories: Array<DocumentCategory>;
  documents: Array<Document>;
  featuredGuides: Array<Guide>;
  getSignedURL: Array<Scalars['String']>;
  guide?: Maybe<Guide>;
  guides?: Maybe<Array<Guide>>;
  guidesForEmotions: Array<Guide>;
  hasAssistanceRequests: Scalars['Boolean'];
  hasJournalEntries: Scalars['Boolean'];
  hasPendingQuestions: Scalars['Boolean'];
  highlightedGriefGuideSlugs: Array<GriefHighlight>;
  introEntriesForPath: Array<IntroEntry>;
  invitations: Array<Invitation>;
  journalEntries: Array<GriefJournalEntry>;
  journalNotificationSetting: GriefJournalNotificationSetting;
  myAccounts: Array<Account>;
  myCaseData: MyCaseData;
  myUser?: Maybe<MyUser>;
  obituary: Obituary;
  obituaryPublicPdfUrl?: Maybe<Scalars['String']>;
  obituaryTopics: Array<ObituaryTopic>;
  path?: Maybe<Path>;
  pathStartedCount: Scalars['Float'];
  paths: Array<Path>;
  pendingQuestions: Array<Question>;
  plan: Plan;
  recommendedGuides: Array<Guide>;
  skus: SkuData;
  step?: Maybe<Step>;
  stepDoneCount: Scalars['Float'];
  steps: Array<Step>;
  todoSteps: Array<Step>;
  upcomingSteps: Array<Step>;
  usersByAccount: Array<User>;
  verifyPincode: Scalars['Boolean'];
};


export type QueryActivityItemsArgs = {
  limit: Scalars['Float'];
  offset: Scalars['Float'];
};


export type QueryAssistanceRequestArgs = {
  id: Scalars['ID'];
};


export type QueryAssistanceRequestVendorArgs = {
  id: Scalars['ID'];
};


export type QueryBusinessArgs = {
  businessSlug: Scalars['String'];
};


export type QueryBusinessListArgs = {
  businessListSlug: Scalars['String'];
};


export type QueryCaseDataForPathIntroArgs = {
  pathId: Scalars['String'];
};


export type QueryDocumentArgs = {
  id: Scalars['String'];
};


export type QueryGetSignedUrlArgs = {
  count: Scalars['Int'];
};


export type QueryGuideArgs = {
  guideSlug: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};


export type QueryGuidesArgs = {
  guideSlugs: Array<Scalars['String']>;
};


export type QueryGuidesForEmotionsArgs = {
  emotions: Array<Scalars['String']>;
  limit?: InputMaybe<Scalars['Float']>;
};


export type QueryIntroEntriesForPathArgs = {
  pathId: Scalars['String'];
};


export type QueryJournalEntriesArgs = {
  limit: Scalars['Float'];
  offset: Scalars['Float'];
};


export type QueryPathArgs = {
  pathId: Scalars['String'];
};


export type QueryPlanArgs = {
  slug: Scalars['String'];
};


export type QueryRecommendedGuidesArgs = {
  guideSlug: Scalars['String'];
  guideType: Scalars['String'];
};


export type QueryStepArgs = {
  stepId: Scalars['String'];
};


export type QueryStepsArgs = {
  stepIds: Array<Scalars['String']>;
};


export type QueryVerifyPincodeArgs = {
  pincode: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  answers: Scalars['JSON'];
  caseKey: Scalars['String'];
  condition?: Maybe<Scalars['JSON']>;
  slug: Scalars['ID'];
  title: Scalars['String'];
  topicTitle: Scalars['String'];
  type: Scalars['String'];
};

export type QuestionIntroEntry = IntroEntry & {
  __typename?: 'QuestionIntroEntry';
  answers: Scalars['JSON'];
  caseKey?: Maybe<Scalars['String']>;
  displayCondition?: Maybe<Scalars['JSON']>;
  explanation?: Maybe<InfoEntryExplanation>;
  id: Scalars['ID'];
  isMultiSelect?: Maybe<Scalars['Boolean']>;
  question: Scalars['String'];
  topic?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ReceiptInput = {
  additionalData?: InputMaybe<Scalars['JSON']>;
  androidData?: InputMaybe<Scalars['String']>;
  androidSignature?: InputMaybe<Scalars['String']>;
  iosReceipt?: InputMaybe<Scalars['String']>;
  source: ReceiptSourceType;
};

/** sources for payment receipts. */
export enum ReceiptSourceType {
  Apple = 'apple',
  Google = 'google'
}

export type RecommendedPathReference = {
  __typename?: 'RecommendedPathReference';
  pathId: Scalars['ID'];
  referenceText: Scalars['String'];
};

export type SavingIntroEntry = IntroEntry & {
  __typename?: 'SavingIntroEntry';
  caseKey?: Maybe<Scalars['String']>;
  displayCondition?: Maybe<Scalars['JSON']>;
  explanation?: Maybe<InfoEntryExplanation>;
  id: Scalars['ID'];
  phrases: Array<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type SkuData = {
  __typename?: 'SkuData';
  android: Array<Scalars['String']>;
  ios: Array<Scalars['String']>;
};

export type Step = {
  __typename?: 'Step';
  assignedTo?: Maybe<AssignedStepTarget>;
  blocks: Array<Block>;
  content: Scalars['JSON'];
  doneById?: Maybe<Scalars['String']>;
  followUpQuestion?: Maybe<QuestionIntroEntry>;
  guides: Array<Guide>;
  id: Scalars['ID'];
  /** @deprecated Steps don't have this field anymore */
  importanceReason?: Maybe<Scalars['String']>;
  isDone: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  /** @deprecated Steps don't have this field anymore */
  isImportant: Scalars['Boolean'];
  isPinned: Scalars['Boolean'];
  isSnoozed: Scalars['Boolean'];
  /** @deprecated Renamed to followUpQuestion */
  parkingLot?: Maybe<QuestionIntroEntry>;
  path: Path;
  recommendedPathsReference?: Maybe<Array<RecommendedPathReference>>;
  remindAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  timing: StepTiming;
  title: Scalars['String'];
  topics: Array<Path>;
};

/** The type of target for assigning. can be either a user ID or an invitation ID. */
export enum StepAssignedTargetType {
  Invitation = 'INVITATION',
  None = 'NONE',
  User = 'USER'
}

/** The timeframe (since death) in which the step should be handled. */
export enum StepTiming {
  Immediate = 'IMMEDIATE',
  Month_3 = 'MONTH_3',
  Month_4 = 'MONTH_4',
  Month_5 = 'MONTH_5',
  Natemp = 'NATEMP',
  Week_1 = 'WEEK_1',
  Week_2 = 'WEEK_2',
  Week_3 = 'WEEK_3',
  Week_4 = 'WEEK_4',
  Week_5 = 'WEEK_5',
  Week_6 = 'WEEK_6',
  Week_7 = 'WEEK_7',
  Week_8 = 'WEEK_8'
}

export type SupportedFeatures = {
  subscription: Scalars['Boolean'];
};

export type TextIntroEntry = IntroEntry & {
  __typename?: 'TextIntroEntry';
  caseKey?: Maybe<Scalars['String']>;
  displayCondition?: Maybe<Scalars['JSON']>;
  explanation?: Maybe<InfoEntryExplanation>;
  id: Scalars['ID'];
  text: Scalars['String'];
  type: Scalars['String'];
};

export type ToolsRequest = {
  __typename?: 'ToolsRequest';
  contactType: ToolsRequestContactType;
  id: Scalars['ID'];
  problems?: Maybe<Array<Scalars['String']>>;
  topic: Scalars['String'];
};

/** available contact types for ToolsRequest Request. */
export enum ToolsRequestContactType {
  Chat = 'Chat',
  Email = 'Email',
  Phone = 'Phone'
}

/** Is this topic emotional or practical */
export enum TopicType {
  Emotional = 'EMOTIONAL',
  Practical = 'PRACTICAL'
}

export type UpdateDocumentInput = {
  documentId: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  toClose?: InputMaybe<Scalars['Boolean']>;
  toFollowUp?: InputMaybe<Scalars['Boolean']>;
  toPay?: InputMaybe<Scalars['Boolean']>;
  toTransfer?: InputMaybe<Scalars['Boolean']>;
  typeId?: InputMaybe<Scalars['ID']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  joinedAccountAt: Scalars['DateTime'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  removedFromAccountAt?: Maybe<Scalars['DateTime']>;
  tags: Array<Scalars['String']>;
};

export type CurrentAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountQuery = { __typename?: 'Query', currentAccount?: { __typename?: 'Account', id: string, accountAttributes: Array<Array<string>> } | null | undefined };

export type CurrentAccountIdQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountIdQuery = { __typename?: 'Query', currentAccount?: { __typename?: 'Account', id: string } | null | undefined };

export type PathInfoFragment = { __typename?: 'Path', id: string, name: string };

export type AllPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPathsQuery = { __typename?: 'Query', paths: Array<{ __typename?: 'Path', id: string, name: string }> };

export const PathInfoFragmentDoc = gql`
    fragment PathInfo on Path {
  id
  name
}
    `;
export const CurrentAccountDocument = gql`
    query currentAccount {
  currentAccount {
    id
    accountAttributes
  }
}
    `;
export type CurrentAccountQueryResult = Apollo.QueryResult<CurrentAccountQuery, CurrentAccountQueryVariables>;
export const CurrentAccountIdDocument = gql`
    query currentAccountId {
  currentAccount {
    id
  }
}
    `;
export type CurrentAccountIdQueryResult = Apollo.QueryResult<CurrentAccountIdQuery, CurrentAccountIdQueryVariables>;
export const AllPathsDocument = gql`
    query allPaths {
  paths {
    ...PathInfo
  }
}
    ${PathInfoFragmentDoc}`;
export type AllPathsQueryResult = Apollo.QueryResult<AllPathsQuery, AllPathsQueryVariables>;