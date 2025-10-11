

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoVolumeMediumSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64" />
          <Path d="M400,368c19.48-34,32-64,32-112s-12-77.7-32-112" />
        </G>
      </Svg>
    );
  }

