

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCropOutline = (props: IconProps) => {

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
          <Path d="M144,48V320a48,48,0,0,0,48,48H464" />
          <Path d="M368,304V192a48,48,0,0,0-48-48H208" />
        </G>
      </Svg>
    );
  }

