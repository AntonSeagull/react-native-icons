

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFilter = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M0.54 0l6.46 9.229v7.771h3v-7.771l6.46-9.229h-15.92zM9 8.914v7.086h-1v-7.086l-5.54-7.914h12.080l-5.54 7.914z" fill="#000000" />
        </G>
      </Svg>
    );
  }

