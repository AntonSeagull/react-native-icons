

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLadderSimpleDuotone = (props: IconProps) => {

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
          <Path  d="M192,32V224H64V32Z" opacity="0.2" />
          <Path  d="M192,24a8,8,0,0,0-8,8V64H72V32a8,8,0,0,0-16,0V224a8,8,0,0,0,16,0V192H184v32a8,8,0,0,0,16,0V32A8,8,0,0,0,192,24Zm-8,56v40H72V80ZM72,176V136H184v40Z" />
        </G>
      </Svg>
    );
  }

