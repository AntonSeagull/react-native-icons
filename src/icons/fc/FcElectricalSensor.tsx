

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcElectricalSensor = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M32,12c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12s12-5.4,12-12C44,17.4,38.6,12,32,12z M32,32 c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S36.4,32,32,32z" fill="#4DD0E1" />
        </G>
      </Svg>
    );
  }

