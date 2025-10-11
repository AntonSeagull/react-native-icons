

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImowUpLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0 11.5l4-4 8.5 8.5 3.5-3.5-8.5-8.5 4-4h-11.5v11.5z" fill="#000000" />
        </G>
      </Svg>
    );
  }

