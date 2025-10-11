

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitCompareOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M256,96h84a60,60,0,0,1,60,60V368" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M255,416H171a60,60,0,0,1-60-60V144" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

