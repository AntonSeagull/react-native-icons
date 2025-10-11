

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiSimpleanalytics = (props: IconProps) => {

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
          <Path d="M1.019 13.019h3.849V24h-3.85zm8.943-6.68h3.85V24h-3.85zM19.132 0h3.85v24h-3.85z" />
        </G>
      </Svg>
    );
  }

