

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPlayListCheck = (props: IconProps) => {

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
          <Path d="M15 6H3V8H15V6Z" fill="currentColor" />
          <Path d="M15 10H3V12H15V10Z" fill="currentColor" />
          <Path d="M3 14H11V16H3V14Z" fill="currentColor" />
          <Path d="M11.9905 15.025L13.4049 13.6106L15.526 15.7321L19.7687 11.4895L21.1829 12.9037L15.526 18.5606L11.9905 15.025Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

