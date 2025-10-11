

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const WiSmallCraftAdvisory = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 30 30"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9.81,24.6V7.45h1.03V24.6H9.81z M11.54,14.86V7.45l8.65,3.69L11.54,14.86z" />
        </G>
      </Svg>
    );
  }

