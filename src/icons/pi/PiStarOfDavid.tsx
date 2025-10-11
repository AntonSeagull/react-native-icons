

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiStarOfDavid = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm9-48L192,111.88,173.79,80Zm-27.42,48-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0ZM128,32.12,146.22,64H109.77ZM45.78,80H82.19L64,111.88Zm0,95.92L64,144.12,82.19,176ZM128,223.88,109.77,192h36.45ZM173.79,176,192,144.12,210.21,176Z" />
        </G>
      </Svg>
    );
  }

