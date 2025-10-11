

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPricetagsSharp = (props: IconProps) => {

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
          <Path d="M288,16,0,304,176,480,464,192V16Zm80,128a32,32,0,1,1,32-32A32,32,0,0,1,368,144Z" />
        </G>
      </Svg>
    );
  }

