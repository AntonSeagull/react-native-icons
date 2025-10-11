

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGitCompareOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M256,96h84a60,60,0,0,1,60,60V368" />
          <Path d="M255,416H171a60,60,0,0,1-60-60V144" />
        </G>
      </Svg>
    );
  }

