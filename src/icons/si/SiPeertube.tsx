

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPeertube = (props: IconProps) => {

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
          <Path d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545" />
        </G>
      </Svg>
    );
  }

