

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextItalicFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,80H153.64l-34.29,96H136a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16h22.36l34.29-96H120a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Z" />
        </G>
      </Svg>
    );
  }

