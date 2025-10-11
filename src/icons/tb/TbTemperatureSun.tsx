

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTemperatureSun = (props: IconProps) => {

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
          <Path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5" />
          <Path d="M4 9h4" />
          <Path d="M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124" />
          <Path d="M13 3v1" />
          <Path d="M21 12h1" />
          <Path d="M13 20v1" />
          <Path d="M19.4 5.6l-.7 .7" />
          <Path d="M18.7 17.7l.7 .7" />
        </G>
      </Svg>
    );
  }

