

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiSortAlphabetically = (props: IconProps) => {

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
          <Path  d="M10.895 16.553l-4-8c-.339-.678-1.45-.678-1.789 0l-4 8c-.247.494-.047 1.095.447 1.342.495.248 1.095.046 1.342-.447l.723-1.448h4.764l.724 1.447c.175.351.528.553.895.553.15 0 .303-.034.446-.105.494-.248.695-.848.448-1.342zm-6.277-2.553l1.382-2.764 1.382 2.764h-2.764zM22 18h-6c-.379 0-.725-.214-.895-.553s-.132-.744.095-1.047l4.8-6.4h-4c-.552 0-1-.448-1-1s.448-1 1-1h6c.379 0 .725.214.895.553s.132.744-.095 1.047l-4.8 6.4h4c.552 0 1 .448 1 1s-.448 1-1 1zM14 14h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1z" />
        </G>
      </Svg>
    );
  }

