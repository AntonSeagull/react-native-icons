

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiPentagonLine = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12.0004 3.03043L20.5309 9.22822L17.2725 19.2564H6.72821L3.46984 9.22822L12.0004 3.03043ZM22.7473 8.50806L12.0004 0.699951L1.25342 8.50806L5.35838 21.1418H18.6423L22.7473 8.50806Z" />
        </G>
      </Svg>
    );
  }

