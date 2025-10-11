

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiPentagonFill = (props: IconProps) => {

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
          <Path d="M12.0004 0.700195L22.7473 8.5083L18.6423 21.1421H5.35838L1.25342 8.5083L12.0004 0.700195Z" />
        </G>
      </Svg>
    );
  }

