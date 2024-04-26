import * as React from "react";

function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" viewBox="0 -960 960 960" width="1em" {...props}>
      <path
        d="M240-400h320v-80H240v80zm0-120h480v-80H240v80zm0-120h480v-80H240v80zM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80zm126-240h594v-480H160v525l46-45zm-46 0v-480 480z"
        fill="currentColor"
      />
    </svg>
  );
}

export default React.memo(MessageIcon);
