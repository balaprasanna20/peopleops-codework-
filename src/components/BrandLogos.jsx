import React from "react";

// 1. GitHub - Official Invertocat Vector
export const GitHubLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// 2. GitLab - Official Polygon Fox Head
export const GitLabLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="GitLab">
    <path fill="#E24329" d="M12 20.898l3.707-11.41H8.293L12 20.898z" />
    <path fill="#FC6D26" d="M12 20.898l-3.707-11.41H1.543l10.457 11.41z" />
    <path fill="#FCA326" d="M1.543 9.488l-.94 2.895a1.25 1.25 0 00.454 1.398L12 20.898 1.543 9.488z" />
    <path fill="#E24329" d="M1.543 9.488h6.75L5.62 1.27c-.204-.627-1.09-.627-1.293 0L1.543 9.488z" />
    <path fill="#FC6D26" d="M12 20.898l3.707-11.41h6.75L12 20.898z" />
    <path fill="#FCA326" d="M22.457 9.488l.94 2.895a1.25 1.25 0 01-.454 1.398L12 20.898l10.457-11.41z" />
    <path fill="#E24329" d="M22.457 9.488h-6.75l2.673-8.218c.204-.627 1.09-.627 1.293 0l2.784 8.218z" />
  </svg>
);

// 3. Bitbucket - Official Atlassian Bitbucket Bucket
export const BitbucketLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Bitbucket">
    <defs>
      <linearGradient id="bbGrad" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0052CC" />
        <stop offset="100%" stopColor="#2684FF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#bbGrad)"
      d="M2.6 3.1c-.5.1-.8.6-.8 1.1l2.4 15.3c.1.5.5.9 1 .9h13.6c.5 0 .9-.4 1-.9l2.4-15.3c.1-.5-.2-1-.7-1.1-.1 0-.2 0-.3 0H2.6zm9.3 12.3H8.3l-1.1-7.1h9.6l-1.1 7.1h-3.8z"
    />
  </svg>
);

// 4. Jira - Official Atlassian Jira Software
export const JiraLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Jira">
    <defs>
      <linearGradient id="jiraG1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0052CC" />
        <stop offset="100%" stopColor="#2684FF" />
      </linearGradient>
      <linearGradient id="jiraG2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2684FF" />
        <stop offset="100%" stopColor="#0052CC" />
      </linearGradient>
    </defs>
    <path fill="url(#jiraG1)" d="M11.53 2c0 5.26-4.27 9.53-9.53 9.53V2h9.53z" />
    <path fill="#0052CC" d="M12.47 11.53c0-5.26 4.27-9.53 9.53-9.53v9.53h-9.53z" />
    <path fill="url(#jiraG2)" d="M2 12.47c5.26 0 9.53 4.27 9.53 9.53H2v-9.53z" />
  </svg>
);

// 5. Linear - Official Linear App Spiral Geometry
export const LinearLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Linear">
    <rect width="24" height="24" rx="5" fill="#5E6AD2" />
    <path
      d="M5.4 12.7c1.3-3.6 4.6-6.1 8.5-6.1 4.9 0 8.9 4 8.9 8.9 0 3.9-2.5 7.2-6.1 8.5L5.4 12.7z"
      fill="#FFFFFF"
      opacity="0.9"
    />
    <path
      d="M3.5 14.5c.3 1.2.9 2.3 1.7 3.2L17.7 5.2c-.9-.8-2-1.4-3.2-1.7L3.5 14.5z"
      fill="#FFFFFF"
    />
  </svg>
);

// 6. Trello - Official Trello Two-Column Board
export const TrelloLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Trello">
    <rect width="24" height="24" rx="4.5" fill="#0079BF" />
    <rect x="4.5" y="4.5" width="6" height="11" rx="1.5" fill="#FFFFFF" />
    <rect x="13.5" y="4.5" width="6" height="7.5" rx="1.5" fill="#FFFFFF" />
  </svg>
);

// 7. Asana - Official Asana 3-Dot Symbol
export const AsanaLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#F06A6A" aria-label="Asana">
    <circle cx="12" cy="7.2" r="3.6" />
    <circle cx="6.6" cy="16.2" r="3.6" />
    <circle cx="17.4" cy="16.2" r="3.6" />
  </svg>
);

// 8. OpenAI / ChatGPT - Official Rosetta Swirl
export const OpenAILogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#10A37F" aria-label="OpenAI">
    <path d="M21.4 10.3a5.5 5.5 0 00-.47-4.47 5.6 5.6 0 00-5.74-2.73 5.5 5.5 0 00-4.22-1.9 5.6 5.6 0 00-5.26 3.82 5.5 5.5 0 00-3.75 2.73 5.6 5.6 0 00.77 6.27 5.5 5.5 0 00.47 4.47 5.6 5.6 0 005.74 2.73 5.5 5.5 0 004.22 1.9 5.6 5.6 0 005.26-3.82 5.5 5.5 0 003.75-2.73 5.6 5.6 0 00-.77-6.27zM12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-6.8-2.6a4.1 4.1 0 012.3-2.3 4.1 4.1 0 014.2.6l-3.3 1.9a1.6 1.6 0 00-.8 1.4v4.4l-1.3-.8a4.1 4.1 0 01-1.1-5.2zm8.5 7.8a4.1 4.1 0 01-4.2-.6l3.3-1.9a1.6 1.6 0 00.8-1.4v-4.4l1.3.8a4.1 4.1 0 011.1 5.2 4.1 4.1 0 01-2.3 2.3zm4-4.8l-1.3-.8a1.6 1.6 0 00-1.6 0l-3.8 2.2v-1.9l3.3-1.9a4.1 4.1 0 015.3 1.4 4.1 4.1 0 01-1.9 1z" />
  </svg>
);

// 9. GitHub Copilot - Official Copilot Wings Logo
export const CopilotLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#6E40C9" aria-label="GitHub Copilot">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 2.4.9 4.6 2.3 6.3l.8-.8C3.9 16 3.2 14.1 3.2 12c0-4.9 3.9-8.8 8.8-8.8s8.8 3.9 8.8 8.8c0 2.1-.7 4-1.9 5.5l.8.8C21.1 16.6 22 14.4 22 12c0-5.5-4.5-10-10-10zm-3 8a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4zm-3 4.5c-2.3 0-3.5 1.2-3.8 2.1h7.6c-.3-.9-1.5-2.1-3.8-2.1z" />
  </svg>
);

// 10. Tara AI - PeopleOps Proprietary Copilot Mark
export const TaraAILogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Tara AI">
    <defs>
      <linearGradient id="taraMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2A7C13" />
        <stop offset="100%" stopColor="#113309" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="url(#taraMarkGrad)" />
    <path
      d="M12 4.5l1.9 4.8 4.8 1.9-4.8 1.9L12 18l-1.9-4.9-4.8-1.9 4.8-1.9L12 4.5z"
      fill="#FFF8CF"
    />
    <circle cx="17.5" cy="6.5" r="1.5" fill="#6EE7B7" />
  </svg>
);

// 11. Slack - Official 4-Color Hashtag
export const SlackLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Slack">
    <path fill="#E01E5A" d="M5.5 10.5C4.67 10.5 4 9.83 4 9s.67-1.5 1.5-1.5H9v3H5.5zm0-4.5C6.33 6 7 6.67 7 7.5V11H4C4 10.17 4.67 9.5 5.5 6z" />
    <path fill="#36C5F0" d="M10.5 5.5C10.5 4.67 9.83 4 9 4s-1.5.67-1.5 1.5V9h3V5.5zm4.5 0C15 6.33 14.33 7 13.5 7H10V4c.83 0 1.5.67 1.5 1.5z" />
    <path fill="#2EB67D" d="M18.5 13.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H15v-3h3.5zm0 4.5c-.83 0-1.5-.67-1.5-1.5V13h3c0 .83-.67 1.5-1.5 1.5z" />
    <path fill="#ECB22E" d="M13.5 18.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V15h-3v3.5zm-4.5 0c0-.83.67-1.5 1.5-1.5H14v3c-.83 0-1.5-.67-1.5-1.5z" />
  </svg>
);

// 12. PagerDuty - Official PagerDuty Icon
export const PagerDutyLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="PagerDuty">
    <rect width="24" height="24" rx="4.5" fill="#06AC38" />
    <path
      d="M7 5.5h5.5c2.5 0 4.2 1.6 4.2 4 0 2.4-1.7 4-4.2 4H9.5V18H7V5.5zm2.5 5.8h2.8c1.1 0 1.9-.7 1.9-1.8 0-1.1-.8-1.8-1.9-1.8H9.5v3.6z"
      fill="#FFFFFF"
    />
  </svg>
);

// 13. Biometric Turnstiles / Access Hardware
export const TurnstileLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Turnstiles">
    <rect width="24" height="24" rx="5" fill="#0D9488" />
    <path d="M12 6.5c-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.6 1.4 3.6" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 9.5c-1.4 0-2.5 1.1-2.5 2.5 0 2.2 1.3 3.8 2.5 4.5 1.2-.7 2.5-2.3 2.5-4.5 0-1.4-1.1-2.5-2.5-2.5z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16.9 15.6c.7-1 1.1-2.2 1.1-3.6 0-3-2.5-5.5-5.5-5.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// 14. GreyHR / Enterprise HRMS
export const GreyHRLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="GreyHR">
    <rect width="24" height="24" rx="5" fill="#1E3A8A" />
    <path d="M6.5 17.5V8.5l5.5 4.5 5.5-4.5v9" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// 15. Microsoft Teams - Official MS Teams Icon
export const TeamsLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Microsoft Teams">
    <path fill="#5059C9" d="M14.5 7.5h6a1 1 0 011 1v7a1 1 0 01-1 1h-6a1 1 0 01-1-1v-7a1 1 0 011-1z" />
    <circle cx="17.5" cy="5.5" r="2" fill="#5059C9" />
    <path fill="#7B83EB" d="M8 8.5h6a1 1 0 011 1v9a1 1 0 01-1 1H8a1 1 0 01-1-1v-9a1 1 0 011-1z" />
    <circle cx="11" cy="5" r="2.5" fill="#7B83EB" />
    <rect x="3.5" y="9" width="7.5" height="7.5" rx="1.5" fill="#4B53BC" />
    <text x="7.2" y="15" fill="#FFF" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">T</text>
  </svg>
);

// 16. Zoom - Official Zoom Video Camera
export const ZoomLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Zoom">
    <rect width="24" height="24" rx="5" fill="#2D8CFF" />
    <path
      d="M6 8.5C6 7.67 6.67 7 7.5 7h6c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-6C6.67 17 6 16.33 6 15.5v-7zm10.5 2.1l2.8-2c.4-.3.9 0 .9.5v5.8c0 .5-.5.8-.9.5l-2.8-2v-2.8z"
      fill="#FFFFFF"
    />
  </svg>
);

// 17. Google Meet - Official Google Multi-Color Camera
export const GoogleMeetLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Google Meet">
    <path fill="#00832D" d="M13 12l2-3H8a2 2 0 00-2 2v3h7z" />
    <path fill="#0066DA" d="M6 14v2a2 2 0 002 2h5l-2-4H6z" />
    <path fill="#E53935" d="M15 9V12l3-2.5-3-.5z" />
    <path fill="#FFBA00" d="M15 12v3l3-2.5-3-.5z" />
    <path fill="#00AC47" d="M13 9h2v3h-2z" />
    <path fill="#00832D" d="M13 12h2v3h-2z" />
    <polygon points="15,9 18.5,6.5 18.5,17.5 15,15" fill="#2684FF" />
  </svg>
);

// 18. Google Calendar - Official Calendar 31
export const GoogleCalendarLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Google Calendar">
    <rect x="3" y="4" width="18" height="17" rx="3.5" fill="#FFFFFF" stroke="#4285F4" strokeWidth="1.5" />
    <rect x="3" y="4" width="18" height="5.5" rx="2" fill="#4285F4" />
    <circle cx="7" cy="4" r="1" fill="#FFFFFF" />
    <circle cx="17" cy="4" r="1" fill="#FFFFFF" />
    <text x="12" y="16.5" fill="#4285F4" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">31</text>
  </svg>
);
