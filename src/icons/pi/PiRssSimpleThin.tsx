

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRssSimpleThin = (props: IconProps) => {

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
          <Path  d="M220,192a4,4,0,0,1-8,0c0-81.61-66.39-148-148-148a4,4,0,0,1,0-8C150,36,220,106,220,192ZM64,108a4,4,0,0,0,0,8,76.08,76.08,0,0,1,76,76,4,4,0,0,0,8,0A84.09,84.09,0,0,0,64,108Zm4,72a8,8,0,1,0,8,8A8,8,0,0,0,68,180Z" />
        </G>
      </Svg>
    );
  }

