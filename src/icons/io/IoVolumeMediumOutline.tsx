

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoVolumeMediumOutline = (props: IconProps) => {

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
          <Path d="M157.65,192H88a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a16,16,0,0,1,10.14,3.63l91.47,75A8,8,0,0,0,272,392.17V119.83a8,8,0,0,0-12.74-6.44l-91.47,75A16,16,0,0,1,157.65,192Z" />
          <Path d="M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64" />
          <Path d="M400,368c19.48-34,32-64,32-112s-12-77.7-32-112" />
        </G>
      </Svg>
    );
  }

