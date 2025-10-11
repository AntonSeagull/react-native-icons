

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChartBarHorizontalThin = (props: IconProps) => {

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
          <Path  d="M224,100H180V56a4,4,0,0,0-4-4H52V40a4,4,0,0,0-8,0V216a4,4,0,0,0,8,0V204h92a4,4,0,0,0,4-4V156h76a4,4,0,0,0,4-4V104A4,4,0,0,0,224,100ZM172,60v40H52V60ZM140,196H52V156h88Zm80-48H52V108H220Z" />
        </G>
      </Svg>
    );
  }

