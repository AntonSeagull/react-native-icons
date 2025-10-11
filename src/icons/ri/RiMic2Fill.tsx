

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiMic2Fill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12.0001 1C14.7615 1 17.0001 3.23858 17.0001 6V12C17.0001 14.7614 14.7615 17 12.0001 17C9.23865 17 7.00008 14.7614 7.00008 12V6C7.00008 3.23858 9.23865 1 12.0001 1ZM2.19238 13.9615L4.15392 13.5692C4.88321 17.2361 8.11888 20 12.0001 20C15.8813 20 19.1169 17.2361 19.8462 13.5692L21.8078 13.9615C20.8961 18.5452 16.8516 22 12.0001 22C7.14858 22 3.104 18.5452 2.19238 13.9615Z" />
        </G>
      </Svg>
    );
  }

