

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoJournalSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z" />
          <Path  d="M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z" />
        </G>
      </Svg>
    );
  }

