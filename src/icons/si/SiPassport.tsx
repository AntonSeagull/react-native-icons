

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPassport = (props: IconProps) => {

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
          <Path d="M11.875 0A9.6 9.6 0 0 0 2.4 9.475h4.8A4.81 4.81 0 0 1 11.875 4.8zm.25 0v4.8A4.81 4.81 0 0 1 16.8 9.475h4.8A9.6 9.6 0 0 0 12.125 0zM2.4 9.725V24H12v-4.8H7.2V9.724zm9.6 9.474a9.599 9.599 0 0 0 9.6-9.474h-4.8A4.807 4.807 0 0 1 12 14.4z" />
        </G>
      </Svg>
    );
  }

