-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.AiUsageLog (
  id text NOT NULL,
  feature text NOT NULL,
  creditsUsed integer NOT NULL DEFAULT 1,
  promptSummary text,
  userId text NOT NULL,
  documentId text,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT AiUsageLog_pkey PRIMARY KEY (id),
  CONSTRAINT AiUsageLog_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id),
  CONSTRAINT AiUsageLog_documentId_fkey FOREIGN KEY (documentId) REFERENCES public.Document(id)
);
CREATE TABLE public.ChatMessage (
  id text NOT NULL,
  role USER-DEFINED NOT NULL,
  content text NOT NULL,
  userId text NOT NULL,
  documentId text,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT ChatMessage_pkey PRIMARY KEY (id),
  CONSTRAINT ChatMessage_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id),
  CONSTRAINT ChatMessage_documentId_fkey FOREIGN KEY (documentId) REFERENCES public.Document(id)
);
CREATE TABLE public.Document (
  id text NOT NULL,
  title text NOT NULL,
  type USER-DEFINED NOT NULL,
  status USER-DEFINED NOT NULL DEFAULT 'DRAF'::"DocumentStatus",
  content jsonb,
  templateId text DEFAULT 'standard'::text,
  fontFamily text DEFAULT 'Inter'::text,
  themeColor text DEFAULT 'blue'::text,
  slug text,
  views integer NOT NULL DEFAULT 0,
  deletedAt timestamp without time zone,
  userId text NOT NULL,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp without time zone NOT NULL,
  CONSTRAINT Document_pkey PRIMARY KEY (id),
  CONSTRAINT Document_templateId_fkey FOREIGN KEY (templateId) REFERENCES public.Template(id),
  CONSTRAINT Document_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id)
);
CREATE TABLE public.Education (
  id text NOT NULL,
  institution text NOT NULL,
  degree text NOT NULL,
  fieldOfStudy text,
  startDate timestamp without time zone NOT NULL,
  endDate timestamp without time zone,
  description text,
  userId text NOT NULL,
  CONSTRAINT Education_pkey PRIMARY KEY (id),
  CONSTRAINT Education_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id)
);
CREATE TABLE public.Experience (
  id text NOT NULL,
  company text NOT NULL,
  position text NOT NULL,
  location text,
  startDate timestamp without time zone NOT NULL,
  endDate timestamp without time zone,
  description text,
  isCurrent boolean NOT NULL DEFAULT false,
  userId text NOT NULL,
  CONSTRAINT Experience_pkey PRIMARY KEY (id),
  CONSTRAINT Experience_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id)
);
CREATE TABLE public.Template (
  id text NOT NULL,
  name text NOT NULL,
  type USER-DEFINED NOT NULL,
  previewUrl text,
  isActive boolean NOT NULL DEFAULT true,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp without time zone NOT NULL,
  CONSTRAINT Template_pkey PRIMARY KEY (id)
);
CREATE TABLE public.User (
  id text NOT NULL,
  email text NOT NULL,
  password text NOT NULL,
  name text NOT NULL,
  profileImageUrl text,
  subscriptionTier USER-DEFINED NOT NULL DEFAULT 'BIASA'::"SubscriptionTier",
  subscriptionEndsAt timestamp without time zone,
  aiCredits integer NOT NULL DEFAULT 10,
  portfolioViews integer NOT NULL DEFAULT 0,
  deletedAt timestamp without time zone,
  createdAt timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt timestamp without time zone NOT NULL,
  bio text,
  headline text,
  location text,
  CONSTRAINT User_pkey PRIMARY KEY (id)
);
CREATE TABLE public.UserPhone (
  id text NOT NULL,
  number text NOT NULL,
  label text NOT NULL DEFAULT 'Utama'::text,
  userId text NOT NULL,
  CONSTRAINT UserPhone_pkey PRIMARY KEY (id),
  CONSTRAINT UserPhone_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id)
);
CREATE TABLE public.UserSocial (
  id text NOT NULL,
  platform text NOT NULL,
  url text NOT NULL,
  userId text NOT NULL,
  CONSTRAINT UserSocial_pkey PRIMARY KEY (id),
  CONSTRAINT UserSocial_userId_fkey FOREIGN KEY (userId) REFERENCES public.User(id)
);