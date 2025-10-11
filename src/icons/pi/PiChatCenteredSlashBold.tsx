

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChatCenteredSlashBold = (props: IconProps) => {

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
          <Path  d="M56.88,31.93a12,12,0,0,0-20.29,4.38A20,20,0,0,0,20,56V184a20,20,0,0,0,20,20H98.11l12.52,21.92a20,20,0,0,0,34.73,0L157.89,204h23l18.25,20.07a12,12,0,0,0,17.76-16.14ZM150.93,180a12,12,0,0,0-10.42,6.05L128,207.94l-12.51-21.89A12,12,0,0,0,105.07,180H44V60h6l109.1,120ZM236,56V174.14a12,12,0,0,1-24,0V60H109.33a12,12,0,1,1,0-24H216A20,20,0,0,1,236,56Z" />
        </G>
      </Svg>
    );
  }

