import * as React from "react";

function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 13 16" fill="none" {...props}>
      <path
        d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM13 7H1v2h12V7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(ArrowIcon);