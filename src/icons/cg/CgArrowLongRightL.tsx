

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowLongRightL = (props: IconProps) => {

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
          <Path d="M18.9164 7.75739L23.1662 11.9929L18.9305 16.2426L17.5139 14.8308L19.3325 13.0061L2.8338 13.0285V15.0299H0.833801V9.02988H2.8338V11.0285L19.3429 11.0061L17.5046 9.17398L18.9164 7.75739Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

