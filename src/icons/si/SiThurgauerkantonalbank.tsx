

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiThurgauerkantonalbank = (props: IconProps) => {

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
          <Path d="M21.872 2.262H10.775l-6.14 9.743 6.14 9.771h11.097l-6.135-9.77 6.135-9.744zM0 .297v23.406h24V.297H0zm23.057 22.486L.943 22.778V1.228h22.109l.005 21.555z" />
        </G>
      </Svg>
    );
  }

