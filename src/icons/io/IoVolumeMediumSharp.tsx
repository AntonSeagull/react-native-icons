

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoVolumeMediumSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M400,368c19.48-34,32-64,32-112s-12-77.7-32-112" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

