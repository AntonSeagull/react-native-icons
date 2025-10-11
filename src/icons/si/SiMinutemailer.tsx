

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMinutemailer = (props: IconProps) => {

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
          <Path d="M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z" />
        </G>
      </Svg>
    );
  }

