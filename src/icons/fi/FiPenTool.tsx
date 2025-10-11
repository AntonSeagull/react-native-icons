

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiPenTool = (props: IconProps) => {

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
          <Path d="M12 19l7-7 3 3-7 7-3-3z" />
          <Path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <Path d="M2 2l7.586 7.586" />
        </G>
      </Svg>
    );
  }

