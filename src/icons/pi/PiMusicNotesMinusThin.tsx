

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMusicNotesMinusThin = (props: IconProps) => {

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
          <Path  d="M228,48a4,4,0,0,1-4,4H176a4,4,0,0,1,0-8h48A4,4,0,0,1,228,48ZM212,88v76a32.06,32.06,0,1,1-8-21.13V88a4,4,0,0,1,8,0Zm-8,76a24,24,0,1,0-24,24A24,24,0,0,0,204,164ZM84,107.12V196a32.06,32.06,0,1,1-8-21.13V56a4,4,0,0,1,3-3.88l56-14A4,4,0,0,1,137,45.88L84,59.12V98.88l75-18.76A4,4,0,0,1,161,87.88ZM76,196a24,24,0,1,0-24,24A24,24,0,0,0,76,196Z" />
        </G>
      </Svg>
    );
  }

