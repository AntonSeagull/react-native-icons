

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiSquareenix = (props: IconProps) => {

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
          <Path d="M1.723 0v24h20.554v-4.496H7.037V4.088h15.006V0zm9.751 9.46v4.497h8.584V9.459z" />
        </G>
      </Svg>
    );
  }

