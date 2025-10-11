

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutline123 = (props: IconProps) => {

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
          <Path  d="M7,15H5.5v-4.5H4V9h3V15z M13.5,13.5h-3v-1h2c0.55,0,1-0.45,1-1V10c0-0.55-0.45-1-1-1H9v1.5h3v1h-2c-0.55,0-1,0.45-1,1V15 h4.5V13.5z M19.5,14v-4c0-0.55-0.45-1-1-1H15v1.5h3v1h-2v1h2v1h-3V15h3.5C19.05,15,19.5,14.55,19.5,14z" />
        </G>
      </Svg>
    );
  }

