export default function Doodles() {
  return (
    <div className="doodle-layer" aria-hidden="true">
      <svg className="doodle doodle-laptop" width="220" height="150" viewBox="0 0 220 150">
        <rect x="46" y="24" width="128" height="78" rx="8" />
        <path d="M28 122 H192 L174 102 H46 Z" />
        <path d="M82 58 L64 72 L82 86" />
        <path d="M138 58 L156 72 L138 86" />
        <path d="M104 92 L120 52" />
        <text x="70" y="142">developer</text>
      </svg>

      <svg className="doodle doodle-testcase" width="210" height="160" viewBox="0 0 210 160">
        <rect x="36" y="20" width="116" height="104" rx="10" />
        <path d="M60 52 L74 66 L100 38" />
        <path d="M60 86 H126" />
        <path d="M60 108 H116" />
        <circle cx="152" cy="42" r="18" />
        <path d="M142 42 L150 50 L164 34" />
        <text x="48" y="150">test cases</text>
      </svg>

      <svg className="doodle doodle-bug-report" width="220" height="160" viewBox="0 0 220 160">
        <rect x="30" y="24" width="116" height="92" rx="10" />
        <path d="M54 52 H112" />
        <path d="M54 76 H96" />
        <path d="M54 100 H122" />
        <ellipse cx="164" cy="82" rx="22" ry="28" />
        <path d="M148 64 C144 50, 154 44, 164 54 C174 44, 184 50, 180 64" />
        <path d="M142 78 H126" />
        <path d="M142 92 H124" />
        <path d="M186 78 H202" />
        <path d="M186 92 H204" />
        <path d="M164 54 V110" />
        <text x="52" y="146">bug report</text>
      </svg>

      <svg className="doodle doodle-api" width="210" height="150" viewBox="0 0 210 150">
        <circle cx="48" cy="46" r="18" />
        <circle cx="156" cy="46" r="18" />
        <circle cx="102" cy="104" r="18" />
        <path d="M66 46 H138" />
        <path d="M60 60 L88 92" />
        <path d="M144 60 L116 92" />
        <text x="34" y="90">api</text>
        <text x="132" y="90">json</text>
      </svg>

      <svg className="doodle doodle-database" width="190" height="160" viewBox="0 0 190 160">
        <ellipse cx="94" cy="34" rx="48" ry="18" />
        <path d="M46 34 V106 C46 118, 66 128, 94 128 C122 128, 142 118, 142 106 V34" />
        <path d="M46 70 C46 82, 66 92, 94 92 C122 92, 142 82, 142 70" />
        <path d="M70 112 L84 124 L118 94" />
        <text x="58" y="152">sql</text>
      </svg>

      <svg className="doodle doodle-terminal" width="210" height="140" viewBox="0 0 210 140">
        <rect x="34" y="24" width="134" height="82" rx="10" />
        <path d="M34 46 H168" />
        <circle cx="50" cy="35" r="3" />
        <circle cx="62" cy="35" r="3" />
        <circle cx="74" cy="35" r="3" />
        <path d="M58 72 L72 84 L58 96" />
        <path d="M88 96 H126" />
        <text x="54" y="128">pytest</text>
      </svg>

      <svg className="doodle doodle-chip" width="200" height="160" viewBox="0 0 200 160">
        <rect x="58" y="38" width="84" height="84" rx="12" />
        <path d="M78 20 V38 M100 20 V38 M122 20 V38" />
        <path d="M78 122 V140 M100 122 V140 M122 122 V140" />
        <path d="M40 58 H58 M40 80 H58 M40 102 H58" />
        <path d="M142 58 H160 M142 80 H160 M142 102 H160" />
        <path d="M80 84 L94 98 L122 64" />
        <text x="62" y="156">ai eval</text>
      </svg>

      <svg className="doodle doodle-branch" width="210" height="150" viewBox="0 0 210 150">
        <circle cx="58" cy="38" r="13" />
        <circle cx="150" cy="38" r="13" />
        <circle cx="104" cy="112" r="13" />
        <path d="M71 38 H137" />
        <path d="M104 51 V99" />
        <path d="M91 112 H62" />
        <path d="M117 112 H148" />
        <text x="62" y="142">git flow</text>
      </svg>

      <svg className="doodle doodle-ci" width="220" height="150" viewBox="0 0 220 150">
        <path d="M64 38 C92 14, 142 18, 160 50" />
        <path d="M160 50 L162 28 L180 44" />
        <path d="M156 106 C128 132, 78 128, 58 96" />
        <path d="M58 96 L56 118 L38 102" />
        <rect x="80" y="54" width="62" height="40" rx="8" />
        <path d="M96 74 H126" />
        <text x="78" y="130">ci/cd</text>
      </svg>

      <svg className="doodle doodle-magnifier" width="190" height="150" viewBox="0 0 190 150">
        <circle cx="76" cy="62" r="34" />
        <path d="M100 88 L136 124" />
        <path d="M58 62 L70 74 L94 48" />
        <path d="M38 128 H126" />
        <text x="42" y="146">debug</text>
      </svg>
    </div>
  );
}
