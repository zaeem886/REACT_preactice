// passing props to components, childer
// <Section>
//   <Heading level={3}>About</Heading>
//   <Heading level={3}>Photos</Heading>
//   <Heading level={3}>Videos</Heading>
// </Section>


// But how can the <Heading> component know the level of its closest <Section>? That would require some way for a child to “ask” for data from somewhere above in the tree.

// <Section level={3}>
//   <Heading>About</Heading>
//   <Heading>Photos</Heading>
//   <Heading>Videos</Heading>
// </Section>


// You can’t do it with props alone. This is where context comes into play. You will do it in three steps:

//     Create a context. (You can call it LevelContext, since it’s for the heading level.)
//     Use that context from the component that needs the data. (Heading will use LevelContext.)
//     Provide that context from the component that specifies the data. (Section will provide LevelContext.)


import Heading from './Heading.jsx';
import Section from './Section.jsx';

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

