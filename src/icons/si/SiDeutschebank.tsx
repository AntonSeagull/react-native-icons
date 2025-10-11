

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiDeutschebank = (props: IconProps) => {

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
          <Path d="M3.375 3.375v17.25h17.25V3.375H3.375zM0 0h24v24H0V0zm5.25 18.225 9.15-12.45h4.35L9.6 18.225H5.25z" />
        </G>
      </Svg>
    );
  }

