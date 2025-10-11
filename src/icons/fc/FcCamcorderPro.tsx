

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcCamcorderPro = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#607D8B" d="M27,8h-9.7c-1.5,0-2.8,0.8-3.5,2.1l-3.3,6L14,18l3.3-6H27v7.2h4V12C31,9.8,29.2,8,27,8z" />
          <Path  fill="#607D8B" d="M30,40H6c-2.2,0-4-1.8-4-4V20c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v16C34,38.2,32.2,40,30,40z" />
          <Path  fill="#607D8B" d="M38,35l5,5h3V18h-3l-5,5V35z" />
          <Path  fill="#546E7A" d="M22,35H8c-1.1,0-2-0.9-2-2V23c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C24,34.1,23.1,35,22,35z" />
          <Path  fill="#263238" d="M41,13h-4c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h4c1.7,0,3,1.3,3,3v0C44,11.7,42.7,13,41,13z" />
        </G>
      </Svg>
    );
  }

