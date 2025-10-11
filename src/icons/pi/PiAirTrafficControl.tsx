

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAirTrafficControl = (props: IconProps) => {

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
          <Path  d="M229.11,70.82A16,16,0,0,0,216,64H136V32h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V64H40A16,16,0,0,0,25,85.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V168h32v64a8,8,0,0,0,16,0V168h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,70.82ZM110.68,152,97.58,80h60.84l-13.1,72ZM40,80H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z" />
        </G>
      </Svg>
    );
  }

