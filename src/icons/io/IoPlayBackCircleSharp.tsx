

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPlayBackCircleSharp = (props: IconProps) => {

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
          <Path  d="M48,256c0,114.69,93.31,208,208,208s208-93.31,208-208S370.69,48,256,48,48,141.31,48,256Zm63.47,0L248,168v72.16l120-72.48V344.13L248,271.81v71.44Z" />
        </G>
      </Svg>
    );
  }

